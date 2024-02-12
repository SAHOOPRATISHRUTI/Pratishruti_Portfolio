import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Pratishruti</h1>
        <p className={styles.description}>
          Welcome to my digital playground, where creativity meets code and
          innovation knows no bounds. As an impassioned dreamer stepping into
          the realm of web development, I'm fueled by an insatiable curiosity
          and a relentless thirst for knowledge.
        </p>
        <a
          href="https://mailto:pratishrutisahoo7@gmail.com"
          className={styles.contactbtn}
        >
          ContactMe
        </a>
      </div>
      <img
        src={getImageUrl("hero/nilu1.png")}
        alt=""
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
