import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import Subsection from "../Subsection/Subsection";

import styles from "./BusinessCard.module.scss";

type BusinessCardProps = {
  onJumpToWork: () => void;
};

const BusinessCard = ({ onJumpToWork }: BusinessCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={profilePic} alt="Profile picture" placeholder="blur" width="160" height="160" layout="fixed" />
      </div>
      <Subsection heading="Connect">
        <ul>
          <li>
            <a href="mailto:maddi.milasas@gmail.com" target="_blank" rel="noreferrer">
              maddi.milasas@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.github.com/madeleinemila" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/madeleine-milasas" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:maddi.milasas@gmail.com" target="_blank" rel="noreferrer">
              Resume available on request
            </a>
          </li>
          <li>
            <button onClick={onJumpToWork} className={styles.jumpTo}>
              Jump to my work below
            </button>
          </li>
        </ul>
      </Subsection>
    </div>
  );
};

export default BusinessCard;
