import Image from "next/image";
import cx from "classnames";
import dichroicMCAImage from "../../../../public/images/features/dichroic-mca.jpg";
import dichroicMakingOfImage from "../../../../public/images/features/dichroic-vim-play.jpg";
import pitchSortImage from "../../../../public/images/features/pitch-sort.png";
import styles from "../shared.module.scss";

const FeatureVivid = () => {
  return (
    <div className={styles.featureFlexColumn}>
      <div className={styles.featureFlexRow}>
        <div className={styles.featureFlex3}>
          <p>
            &quot;Dichroic Dimensions&quot; was an interactive public installation, using live vocals to control
            building-scale projections and soundscapes.
          </p>
          <br />
          <p>Exhibited at Vivid Sydney 2014, Museum of Contemporary Art facade; working with The Digital Shamans.</p>
          <br />
          <p>
            I designed and implemented the interactive AV architecture, and created software using Max to drive
            pitch-reactive visuals and soundscapes.
          </p>
          <br />
          <p>Built with:</p>
          <ul>
            <li>Max 6</li>
            <li>Ableton Live</li>
            <li>VDMX</li>
          </ul>
        </div>
        <div className={cx(styles.featureFlex2, styles.featureImage)}>
          <Image src={dichroicMCAImage} alt="Dichroic Dimensions" placeholder="blur" />
        </div>
      </div>
      <div className={styles.featureFlexRow}>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={pitchSortImage} alt="Pitch reactive software screenshot" layout="responsive" placeholder="blur" />
        </div>
        <div className={styles.featureFlex1}>
          <a href="https://player.vimeo.com/video/92922101" target="_blank" rel="noreferrer">
            <Image
              src={dichroicMakingOfImage}
              alt="Dichroic Dimensions Making Of"
              layout="responsive"
              placeholder="blur"
            />
            <span className={styles.caption}>&lsquo;Dichroic Dimensions&rsquo; making-of video</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureVivid;
