import Image, { StaticImageData } from "next/image";
import cx from "classnames";

import styles from "./Thumbnail.module.scss";

type ThumbnailProps = {
  imageData: StaticImageData;
  label: string;
  isActiveFeature: boolean;
  onClick: () => void;
};

export const Thumbnail = ({ imageData, label, isActiveFeature, onClick }: ThumbnailProps): JSX.Element => {
  return (
    <button onClick={onClick} className={cx(styles.container, isActiveFeature && styles.active)}>
      <Image
        src={imageData}
        alt={`Thumbnail for ${label}`}
        placeholder="blur"
        width="100"
        height="100"
        className={styles.img}
      />
      <div className={styles.labelContainer}>
        <h5 className={styles.label}>{label}</h5>
      </div>
    </button>
  );
};

export default Thumbnail;
