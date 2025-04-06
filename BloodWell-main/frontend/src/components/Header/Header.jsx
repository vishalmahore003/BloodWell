import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>BloodWell</h1>
      <nav className={classes.nav}>
        <ul className={classes.nav__links}>
          <li className={classes.nav__link}>Home</li>
          <li className={classes.nav__link}>Home</li>
          <li className={classes.nav__link}>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
