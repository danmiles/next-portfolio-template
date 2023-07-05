import styles from '@styles/pages/contactPage.module.css';
import Image from 'next/image';
import ButtonLink from '@components/ButtonLink';

export const metadata = {
  title: 'JS Case | Contant',
  description:
    'Contact us page of JS Case. We can contact us via email or phone.',
};

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <div className="container">
        <h1 className={styles.title}>Let's Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/contact/contact.png"
              alt="contact us"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <ButtonLink url="#" text="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
