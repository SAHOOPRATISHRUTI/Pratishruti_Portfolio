import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.contain}>
        <h2 className={styles.title}>About</h2>

        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about_img"
          className={styles.aboutImg}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h2>Front-End Developer</h2>
              <p>
                I specialize in creating responsive and intuitive user
                interfaces using HTML5, CSS3, and JavaScript frameworks like
                React.js and Vue.js.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h2>Back-end Developer</h2>
              <p>
                From server-side scripting to database management,I'm proficient
                in languages such as Node.js, Python, and PHP, ensuring robust
                functionality behind the scenes.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h2>UI Designer</h2>
              <p>
                With a holistic approach, I deliver end-to-end solutions that
                seamlessly integrate front-end and back-end technologies for
                optimal performance. I prioritize user experience,
                leveraging my design skills to craft visually stunning
                interfaces that captivate and delight users.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
