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
                I&apos;ve also worked with:
                <ul className={styles.listStyleDisc}>
                  <li>Go, C, C#, Haskell, Ruby, Processing, Arduino</li>
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
            <p>Live music lighting & video</p>
            <p>Broadcast television operations</p>
          </Subsection>
        </div>

        <div className={styles.cell}>
          <Subsection heading="Education">
            <p>Bachelor of Arts, University of Sydney</p>
            <p>Grad. Dip. Interaction Design & Electronic Arts, University of Sydney, High Distinction Average</p>

            <p>General Assembly Software Engineering Immersive</p>
          </Subsection>
        </div>
      </div>
    </div>
  );
};

export default Profile;
