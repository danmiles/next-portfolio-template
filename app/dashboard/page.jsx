'use client';
import React, { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '@styles/pages/dashboard.module.css';
import Link from 'next/link';
import Loading from '@components/Loading';

const Dashboard = () => {
  const [resource, setResource] = useState();
  const [imgStatus, setImgStatus] = useState('Upload an image (required)');
  const [status, setStatus] = useState({
    message: '',
    error: false,
  });

  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  // Add special preloader (loading) for the first time when the page is loading

  if (session.status === 'loading') {
    return (
      <Loading />
    );
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;

    // Check if user has uploaded an image
    if (resource !== undefined) {
      try {
        // need to post resource?.secure_url link to the database

        await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({
            title,
            desc,
            img: resource?.secure_url,
            content,
            username: session.data.user.name,
          }),
        });
        mutate();
        e.target.reset();
        setStatus({ message: 'Your post has been created !', error: false });
        setImgStatus('Upload an image (required)');
      } catch (err) {
        console.log(err);
      }
    } else {
      setStatus({ message: 'Please upload an image', error: true });
    }
  };

  const handleDelete = async (id) => {
    const hasConfirmed = confirm('Are you sure you want to delete this post?');
    if (hasConfirmed) {
      try {
        await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        mutate();
        setStatus({ message: 'Your post has been deleted', error: false });
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (session.status === 'authenticated') {
    return (
      <section className={styles.dashboard}>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading
              ? <Loading />
              : data?.map((post) => (
                  <div className={styles.post} key={post._id}>
                    <Link
                      href={`/blog/${post._id}`}
                      className={styles.postLink}
                      key={post._id}
                    >
                      <div className={styles.imgContainer}>
                        <Image
                          className={styles.img}
                          src={post.img}
                          alt=""
                          width={450}
                          height={250}
                        />
                      </div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                    </Link>
                    {/* need ask user delete post or not */}
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </span>
                  </div>
                ))}
          </div>
          <form className={styles.new} onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input
              required
              type="text"
              placeholder="Title"
              className={styles.input}
            />
            <input
              required
              type="text"
              placeholder="Desc"
              className={styles.input}
            />

            {/* Upload an image (required) with Cloudinary start */}
            <CldUploadWidget
              uploadPreset="upload-next-js"
              onUpload={(result, widget) => {
                setResource(result?.info);
                setImgStatus('Image uploaded !');
                setStatus({ message: '', error: false });
                widget.close();
              }}
            >
              {({ open }) => {
                function handleOnClick(e) {
                  setResource(undefined);
                  e.preventDefault();
                  open();
                }
                return (
                  <div className={styles.uploadImage} onClick={handleOnClick}>
                    <Image
                      src="images/dashboard/upload.svg"
                      width={30}
                      height={30}
                      alt="upload icon"
                    />
                    <span className={styles.imgStatus}>{imgStatus}</span>
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* Upload an image (required) with Cloudinary end */}
            <textarea
              required
              placeholder="Content"
              className={styles.textArea}
              cols="30"
              rows="10"
            ></textarea>
            <p
              className={`message-status ${
                !status.error ? 'success' : 'error'
              }`}
            >
              {status.message}
            </p>
            <button className={`button-main ' ' ${styles.buttonDashboard}`}>
              Create new post
            </button>
          </form>
        </div>
      </section>
    );
  }
};

export default Dashboard;
