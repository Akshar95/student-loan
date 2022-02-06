import Head from "next/head";
import { Form } from "../components/Calculate";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Student-Loan Calculator</title>
          <meta
            name="Student loan calculator"
            content="Student loan calculator"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="navbar">
            <Navbar />
          </div>

          <Form />
        </main>

        <footer className="footer"></footer>
      </div>
      <style jsx>{`
        .navbar {
        }

        @media (min-width: 768px) {
        }
      `}</style>
    </>
  );
}
