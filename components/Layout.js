import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <header>
          <Navbar />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
