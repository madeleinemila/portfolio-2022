import BusinessCard from "../BusinessCard/BusinessCard";
import Subsection from "../Subsection/Subsection";

import styles from "./Profile.module.scss";

type ProfileProps = {
  onJumpToWork: () => void;
};

const Profile = ({ onJumpToWork }: ProfileProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <BusinessCard onJumpToWork={onJumpToWork} />
        </div>

        <div className={styles.cell}>
          <Subsection heading="Skills">
            <ul className={styles.listStyleNone}>
              <li>
                I&apos;m at home with:
                <ul className={styles.listStyleDisc}>
                  <li>TypeScript, React, Redux, Node, JavaScript, HTML, CSS</li>
                </ul>
              </li>
              <li>
                I&apos;ve worked with:
                <ul className={styles.listStyleDisc}>
                  <li>Go, C, C++, C#, Haskell, Ruby, Processing, Arduino</li>
                </ul>
              </li>
              <li>
                You can also find me on:
                <ul className={styles.listStyleDisc}>
                  <li>Ableton Live, Premiere Pro, Figma</li>
                </ul>
              </li>
            </ul>
          </Subsection>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.cell}>
          <Subsection heading="Background">
            <p>Frontend & backend web development</p>
            <p>Film & television production, post-production & visual effects</p>
            <p>Interaction design & realtime multimedia installation</p>
            <p>Live music lighting, video & camera</p>
            <p>Broadcast operations</p>
            <p>Music production</p>
          </Subsection>
        </div>

        <div className={styles.cell}>
          <Subsection heading="Education">
            <p>Bachelor of Arts, University of Sydney</p>
            <p>Grad. Dip. Interaction Design & Electronic Arts, University of Sydney, High Distinction</p>

            <p>General Assembly Software Engineering Immersive</p>
          </Subsection>
        </div>
      </div>
    </div>
  );
};

export default Profile;
