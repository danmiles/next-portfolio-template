'use client'
import { signIn } from 'next-auth/react';
import React from 'react';

import styles from '@/styles/pages/login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div>Login</div>
      <button className='button-main' onClick={()=>signIn("google")}>Login With Google</button>
    </section>
  );
};

export default Login;
