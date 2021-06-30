import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";
const https = require("https");

export default function Gallery({ nasa }) {
  return (
    <>
      <Head>
        title='Expedition Rymden - Galleri' description='Här kommer bilder som
        NASA:s rovers har tagit.'
      </Head>
      <main>
        <div className={styles.header}>
          <h1>Galleri</h1>
          <h3>Kika på bilder som de olika Rovers har tagit</h3>
        </div>
        <div className={styles.infoStart}>
          <h2>Rovers som har slutfört sitt uppdrag</h2>

          <div className={styles.info}>
            <div className={styles.infoImage}>
              <Image
                width={1243}
                height={907}
                src="/images/info.jpg"
                alt="Rover information"
                layout="responsive"
              />
            </div>

            <div>
              <div className={styles.ImageText}>
                <h3>Opportunity</h3>
                <strong>
                  <pre>
                    Sols: 5347 till 5353,
                    <br />
                    Datum: Feb. 13, 2019
                  </pre>
                </strong>
                <p>
                  Inget svar har mottagits från Opportunity sedan Sol 5111 (10
                  juni 2018) mitt i en planetomsläppande dammstorm på Mars. Med
                  den sista upplänköverföringen på Sol 5352 (12 februari 2019)
                  avslutas rover-återhämtningsarbetet. Opportunity-uppdraget är
                  klart.
                </p>
              </div>
              <h3>SPIRIT </h3>
              <strong>
                <pre>
                  Sols: 2621 till 2627,
                  <br />
                  Datum: Feb. 13, 2019
                </pre>
              </strong>
              <p>
                Mer än 1300 kommandon utstrålades till Spirit som en del av
                återhämtningsarbetet i ett försök att framkalla ett svar från
                roveren. Ingen kommunikation har tagits emot från Spirit sedan
                Sol 2210 (22 mars 2010). Projektet avslutade
                Spirit-återhämtningsansträngningarna den 25 maj 2011. De
                återstående, försekvenserade UHF-reläpass som planeras för
                Spirit ombord på Odyssey-orbitern kommer att slutföras den 8
                juni 2011.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.headerRovers}>
          <h1>Nasa:s Rovers</h1>
          <div className={styles.rovers}>
            {nasa.map((item) => (
              <div key={item.id}>
                <Link href="/rover/[roverName]" as={`/rover/${item.roverName}`}>
                  <a className={styles.roversNames} title={item.roverName}>
                    <Image
                      src={`/images/${item.roverImage}.jpg`}
                      width={400}
                      height={400}
                    />
                    {item.roverName}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// Serverside rendering, nodejs
export async function getStaticProps() {
  const options = {
    agent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  try {
    const res = await fetch("https://localhost:5001/api/Rover", options);
    const data = await res.json();

    return {
      props: {
        nasa: data,
      },
    };
  } catch (error) {
    console.log(`Ett fel har uppstått: ${error}`);
  }
}
