import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Form } from "../components/Calculate";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student-Loan Calculator</title>
        <meta
          name="Student loan calculator"
          content="Student loan calculator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar />
      
        <Form />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
