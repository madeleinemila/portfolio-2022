import styles from "../shared.module.scss";

const FeatureBrooklyn = () => {
  return (
    <div>
      <p>
        I hosted live music in my living room and on the rooftop of my building, in a project named &lsquo;Brooklyn at
        Hibernian&rsquo; in Sydney&apos;s Hibernian House.
      </p>
      <br />
      <p>
        Collaborating with friends in audio engineering and videography, we filmed and livestreamed Australian &
        international artists. I was responsible for creating a livestream studio, camera operating & live
        vision-switching.
      </p>
      <br />
      <p>
        More here:
        <br />
        <a className={styles.featureLink} href="https://brooklynathibernian.com/" target="_blank" rel="noreferrer">
          brooklynathibernian.com
        </a>
      </p>
      <br />
      <div style={{ width: "100%", height: "396px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/OEC71jqUk48?showinfo=0&controls=0&autohide=1"
          title="Brooklyn at Hibernian video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FeatureBrooklyn;
