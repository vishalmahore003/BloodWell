import classes from "../../../assets/css/multiform.module.css";

const HospitalForm = (props) => {
  const formLinkClickHandler = (evt) => {
    props.onChangeFormType();
  };

  return (
    <form action="#" className={classes.form}>
      <div className={classes.form__row}>
        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="name">
            Hospital Name
          </label>
          <input className={classes.form__input} type="text" name="name" id="name" />
        </div>

        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="owner">
            Owner
          </label>
          <input className={classes.form__input} type="text" name="owner" id="owner" />
        </div>
      </div>

      <div className={classes.form__row}>
        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="phone">
            Phone No.
          </label>
          <input className={classes.form__input} type="text" name="phone" id="phone" />
        </div>

        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="email">
            Email
          </label>
          <input className={classes.form__input} type="email" name="email" id="email" />
        </div>
      </div>

      <div className={classes.form__row}>
        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="website">
            Website
          </label>
          <input className={classes.form__input} type="text" name="Website" id="Website" />
        </div>

        <div className={classes.input__box}>
          <label className={classes.form__label} htmlFor="password">
            Password
          </label>
          <input className={classes.form__input} type="password" name="password" id="password" />
        </div>
      </div>

      <div className={classes.form__row}>
        <div className={classes.textarea__box}>
          <label className={classes.form__label} htmlFor="website">
            Address
          </label>
          <textarea className={classes.form__textarea} name="address" id="address"></textarea>
        </div>
      </div>

      <button className={classes.form__btn} type="button">
        SignUp
      </button>

      <a onClick={formLinkClickHandler} className={classes.form__link}>
        Already have an account? Login.
      </a>
    </form>
  );
};

export default HospitalForm;
