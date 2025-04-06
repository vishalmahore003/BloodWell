import classes from "../../../assets/css/multiform.module.css";

const HospitalLogInForm = (props) => {
  const formLinkClickHandler = (evt) => {
    props.onChangeFormType();
  };

  return (
    <form action="#" className={classes.form}>
      <div className={classes.form__row}>
        <div className={classes["input__box--login"]}>
          <label className={classes.form__label} htmlFor="email">
            Hospital Email
          </label>
          <input className={classes.form__input} type="email" name="email" id="email" />
        </div>
      </div>

      <div className={classes.form__row}>
        <div className={classes["input__box--login"]}>
          <label className={classes.form__label} htmlFor="password">
            Password
          </label>
          <input className={classes.form__input} type="password" name="password" id="password" />
        </div>
      </div>

      <button className={classes.form__btn} type="button">
        LogIn
      </button>

      <a onClick={formLinkClickHandler} className={classes.form__link}>
        Don't have an account? SignUp.
      </a>
    </form>
  );
};

export default HospitalLogInForm;
