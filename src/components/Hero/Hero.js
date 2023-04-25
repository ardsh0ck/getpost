import React from "react";
import styles from "./Hero.module.scss";
import BackgroundImage from "../../assets/img/bg-image.jpg";
import Button from "../organism/Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div
        className={styles.heroInner}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className={styles.heroDescription}>
          <h1 className={styles.heroHeading}>
            Test assignment for front-end developer
          </h1>
          <p className={styles.heroText}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button type="button" color="yellow">
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
