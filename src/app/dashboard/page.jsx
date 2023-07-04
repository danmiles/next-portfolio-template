'use client';
import React, { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/pages/dashboard.module.css';
import Link from 'next/link';
import { set } from 'mongoose';
import { m } from 'framer-motion';

const Dashboard = () => {
  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  // ================ NEW WAY TO FETCH DATA =================
  const [resource, setResource] = useState();
  const [imgtest, setImgtest] = useState();
  const [status, setStatus] = useState({
    message: '',
    error: false,
  });
  console.log(resource?.secure_url);

  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  // Add special preloader (loading) for the first time when the page is loading

  // if (session.status === 'loading') {
  //   return (
  //     <section className={styles.dashboard}>
  //       <div className="container">
  //         <p>Loading...</p>;
  //       </div>
  //     </section>
  //   );
  // }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;

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
        setStatus({ message: 'Your post has been created', error: false });
      } catch (err) {
        console.log(err);
      }
    } else {
      setStatus({ message: 'Please upload an image', error: true });
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
      setStatus({ message: 'Your post has been deleted', error: false });
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <section className={styles.dashboard}>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading
              ? 'loading'
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
            <input type="text" placeholder="Title" className={styles.input} />
            <input type="text" placeholder="Desc" className={styles.input} />
            {/* <input
              type="text"
              placeholder="Image (Cloudinary URL only)"
              className={styles.input}
            /> */}

            {/* Upload image with Cloudinary start */}
            <CldUploadWidget
              uploadPreset="upload-next-js"
              onUpload={(result, widget) => {
                setResource(result?.info);
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
                  <div className="button-main" onClick={handleOnClick}>
                    Upload an Image
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* Upload image with Cloudinary end */}
            <textarea
              placeholder="Content"
              className={styles.textArea}
              cols="30"
              rows="10"
            ></textarea>
            <p className={styles.statusMessage}>{status.message}</p>
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
