import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__text}>
        <div className={`text__primary ${classes.hero__primaryText}`}>Blood is life, pass it on!</div>

        <div className={`text__secondary ${classes.hero__secondaryText}`}>
          To the young and healthy it's no loss. To the sick, it's the hope of life. A single pint can save three lives, a single gesture can create a
          million smiles. A life may depend on a gesture from you, you can save many lives with a bottle of blood. Blood donation will cost you
          nothing but it will save a life. Donate Blood to give back life.
        </div>

        <a href="#signUp" className={`btn btn--primary ${classes.hero__btn}`} type="button">
          Donate Now!
        </a>
      </div>
      <div className={classes.hero__image}>
        <div className={classes.mask}></div>
      </div>
    </section>
  );
};

export default HeroSection;
