import heartImg from "../../assets/images/heart.png";

import classes from "./HeroSectionSecondary.module.css";

const HeroSectionSecondary = () => {
  return (
    <section className={classes.heroSecondary}>
      <div className={classes.heroSecondary__image}>
        <img src={heartImg} alt="" />
      </div>

      <div className={classes.heroSecondary__text}>
        <div className={classes.text__primary}>Donate blood and save lives.</div>

        <div className={classes.text__secondary}>
          “Do you feel you don't have much to offer? You have the most precious resource of all: the ability to save a life by donating blood! Help
          share this invaluable gift with someone in need.”
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
