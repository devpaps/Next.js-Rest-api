import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        title="Expedition Rymden" description="Här finner ni allt inom rymden"
      </Head>
      <section className={styles.mainSection}>
        <Image
          className={styles.logo}
          width={1600}
          height={1190}
          src="/images/rocketlaunch.png"
          alt="Workflow"
          layout="responsive"
        />
        <div className={styles.textBlock}>
          <h1>Här kommer ni finna lärdom!</h1>
          <h2>Ingen förströelse av eran tid här inte.</h2>
          <Link href="/gallery">
            <a className={styles.button}>Spana in</a>
          </Link>
        </div>
      </section>
    </>
  );
}
