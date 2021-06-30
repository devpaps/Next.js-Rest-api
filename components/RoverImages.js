import styles from "../styles/Rovers.module.css";
import Image from "next/image";

const roverImages = ({ nasaApi }) => {
  return (
    <div className={styles.roverImages}>
      {nasaApi.latest_photos.map((item) => (
        <figure key={item.id}>
          <a href={item.img_src} title="Klicka för större bild">
            <Image src={item.img_src} width={300} height={300} />
          </a>
          <figcaption>
            SOL: {item.sol}, <br /> Kamera: {item.camera.full_name}, <br />{" "}
            Datum: {item.earth_date}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default roverImages;
