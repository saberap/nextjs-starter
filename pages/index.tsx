import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Iva Static</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <a
            href="https://ivaapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by ivaapp.com
          </a>
        </main>
      </div>
    </>
  );
};

export default Home;
