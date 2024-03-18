import Image from "next/image";
import livestreamImage from "../../../../public/images/features/yt-livestream-play-a.jpg";
import subvixenGif from "../../../../public/images/features/subvixen-demo.gif";
import styles from "./FeatureSubvixen.module.scss";

const FeatureSubvixen = () => {
  return (
    <div className={styles.container}>
      <p>A pixel-mapper web app, that takes video and generates Arduino code for LED arrays.</p>
      <br />
      <div>
        <Image
          src={subvixenGif}
          alt="Speed demo of Subvixen"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABJ5JREFUWEeNV01rFEEQre6ZxKPkD+jBo148efKgF8EQiJBLQAKyByNE8SPk66/vTLdU1XvdNZONZqG3Z3dnp169evXRSUSqhFcSkdFWlj0ZZNS1P8rwZJRhb5Q8jjKMg6RhkJwHSTn7SrqSiD5AklQ81vZapEqRWvVTwWc1W/X2bAD0f1mSDCIySJZRkhkfhkGGfSwFoIZHGB+yg0hZJCUAMAT2chBuVI2L7QpGQel7lfRUDhoABwEwY5K8J5LHLFmvdafBQb1WEO69G+dO4xFEBAAWACI9O3juITD2qltPVZ8p+kz7Xp+d3cO+O+3RuF8vATgDYKIWMOKflYX08sUraMA33uzS6H9uvMKAxxtLQL97AQ7dET7VDYL+Jrsq6c3rN3aPv9UmFBOM/sFWj5kLqb9MRmbTqMP1StVwhk51jqqkd2/fA6R7awZLlWJ7wT7bXor/XgwcANtGz6P3ARchJ1APru3uww+HYADeN+OzlFJkLrOU2a+LXttOgLqvY94EtYyGGSdJncN08ukE7DsAN0Bjs8yzLwWhYPxagXlonJVlWKDoBoDC5N4Er3g+n342NpXTRjs8p/F5mmSedc0yLQBVhIkh6TKwjIA2glY7KMgkbb5svEYAAL2Pxic1Pk0y6VIABqg4GwwHM4t6tMxQbbo+eL1mI337+q2FINJv3sJzM6xruw0gEB6EzBNFH+WZYDUDAO4D6WJNPy5+dACqcIuvPly9VhBudEvjBkSZ8N9VCwpcMydIC1np9SEHICxWLBfp968/in0hQKPf6O6ebxXIdgnEAMwQLWrITgZYRSMj1MDV5RUk4F5Q6cqA0z6JG98aCwsmDEBPTSt2DAKaUzbjDMlKF3rvzfWNhwBisnQztQMA6Q8AOojHArgPglU73d7cPRyCaSvbXQAQjmnFgOcz2wHjzwa2FCard7q7VQCu4JiCUfkaAtJv3qsIkRmmAV3UgMUAnTNQn8N3npbIFgXgZQAaQAioAaf7IQD/DkE3qiyAAaRo61u3N7fVO59XQktDA0EvadzrALPBGegALA1bHq5jvqMmsGVcX137cBT6QEtDFqDGgBrtIXCgoQ48EkDr3srG5Z9LhAB1HQ2HldA9Dem3K/5oTA8ysO4JDIPuP3/+upcFLRVZjMwoyjDFF4sQOmIvhRzNAvVhZrE2xdnl4uJ7A2C1QBnQbshSDC20ZqT9AbFf08/RygUO4zBm8xIH5jC/pPPz8/93Q2tKbE5appfqdxFzrkN6kfZguAFgGVYgm83Gx3Sd3i2WsSGx9TIrMJiw/mM66sY5C0YQjW10yTAv6rng7Oxsx0TEqQddMQ4hLDzNuDeAhQCbjT6mxwOYjf9k4fT09D8jmTLi41ibDWdOT5gBQvp5NwoMNFO8KQ6RVdLJyXImtBC0uRCzITtebL1B+TaaxxoQGFgePSNV/od0fHy8YIAFqVa0WTPaWy5LdpuAdCTvLahPRATB1OChp8UKAI6OjtpQysOINZYwhvt1n4L9ALOMu5/q1mCszTkUKhWC5/fp46GfC9qpCCciH7P8YMJrA8gxvIU0GiUEfreMN/K9IdfM+wsZgu64uS1z7wAAAABJRU5ErkJggg=="
          // Adding unoptimized re: issue with deployed gifs not playing
          unoptimized
        />
        <br />
        <p>
          Deployed on Render:
          <br />
          <a className={styles.featureLink} href="https://subvixen.onrender.com/" target="_blank" rel="noreferrer">
            subvixen.onrender.com
          </a>
          <br />
          It may take a few minutes to load as the Render servers start up.
        </p>
        <br />
        <p>
          Source code:
          <br />
          <a
            className={styles.featureLink}
            href="https://github.com/madeleinemila/subvixen"
            target="_blank"
            rel="noreferrer"
          >
            github.com/madeleinemila/subvixen
          </a>
        </p>
        <br />
        <p>Created for General Assembly&apos;s Software Engineering Immersive, final solo assignment.</p>
        <br />
        <p>Built with:</p>
        <ul>
          <li>HTML5 native video &amp; canvas</li>
          <li>CSS3 + Sass</li>
          <li>JavaScript</li>
          <li>Ruby on Rails</li>
          <li>C & Arduino</li>
        </ul>
      </div>
      <div className={styles.supplement}>
        <a
          className={styles.supplementLink}
          href="https://www.youtube.com/embed/t8pxUcoJPww?autoplay=1&rel=0&amp;showinfo=0"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.caption}>Project presentation livestream</span>
          <Image
            className={styles.supplementImage}
            src={livestreamImage}
            alt="Presentation video thumbnail"
            style={{ width: "100%", height: "auto" }}
            placeholder="blur"
          />
        </a>
      </div>
    </div>
  );
};

export default FeatureSubvixen;
