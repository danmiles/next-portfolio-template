'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import styles from './uploadPage.module.css';

const page = () => {
  const [resource, setResource] = useState();
  console.log(resource?.secure_url)

  return (
    <section className={styles.upload}>
      <div className="container">
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
            <div className='button-main' onClick={handleOnClick}>
              Upload an Image
            </div>
          );
        }}
      </CldUploadWidget>

      <p>URL: { resource?.secure_url }</p>
      </div>

      
    </section>
  );
};

export default page;
