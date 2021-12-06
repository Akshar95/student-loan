import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Form} from '../components/Calculate'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student-Loan Calculator</title>
        <meta name="Student loan calculator" content="Student loan calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Student Loan</h1>
        <h2 className={styles.subtitle}>calculator</h2>
        <Form />

      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
