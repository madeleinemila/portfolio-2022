import Image, { StaticImageData } from "next/image";

import styles from "./Thumbnail.module.scss";

type ThumbnailProps = {
  imageData: StaticImageData;
  label: string;
  onClick: () => void;
};

export const Thumbnail = ({ imageData, label, onClick }: ThumbnailProps): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.container}>
      <Image
        src={imageData}
        alt={`Thumbnail for ${label}`}
        priority
        placeholder="blur"
        width="100"
        height="100"
        layout="fixed"
        className={styles.img}
      />
      <div className={styles.labelContainer}>
        <h5 className={styles.label}>{label}</h5>
      </div>
    </button>
  );
};

export default Thumbnail;
