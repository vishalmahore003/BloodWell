import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footer__links}>
        <li className={classes.footer__link}>Contact</li>
        <li className={classes.footer__link}>Contact</li>
        <li className={classes.footer__link}>Contact</li>
      </ul>
    </footer>
  );
};

export default Footer;
