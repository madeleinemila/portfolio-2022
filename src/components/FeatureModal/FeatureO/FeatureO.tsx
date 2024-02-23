import styles from "../shared.module.scss";

const FeatureO = () => {
  return (
    <div>
      <p>
        A collaboration with Australian taiko ensemble Taikoz & The Digital Shamans, &ldquo;Origin of O&rdquo; combined
        live drumming with interactive projections & movement-controlled sound effects.
      </p>
      <br />
      <p>
        My role: design & implementation of hardware and software systems for realtime interaction with music and
        projections.
      </p>
      <br />
      <p>
        Highlight: building a pathway for a drummer&apos;s heartbeat to control audio samples and projections. The
        drummer then played to the tempo of his own heartbeat, gradually accelerating.
      </p>
      <br />
      <video
        className={styles.fullWidthVideo}
        preload="metadata"
        poster="/images/features/origin-of-o-poster-black.jpg"
        autoPlay
        playsInline
        loop
        muted
      >
        <source src="/images/features/origin-of-o-clip-mute.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default FeatureO;
