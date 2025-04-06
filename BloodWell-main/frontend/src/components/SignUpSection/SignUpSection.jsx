import { useState } from "react";

import DonorSignUpForm from "./DonorForm/DonorSignUpForm";
import DonorLogInForm from "./DonorForm/DonorLogInForm";

import HospitalSignUpForm from "./HospitalForm/HospitalSignUpForm";
import HospitalLogInForm from "./HospitalForm/HospitalLogInForm";

import OrganizationSignUpForm from "./OrganizationForm/OrganizationSignUpForm";
import OrganizationLogInForm from "./OrganizationForm/OrganizationLogInForm";

import classes from "./SignUpSection.module.css";

const SignUpSection = () => {
  const [FormUserType, setFormUserType] = useState("Donor");
  const [IsRegistered, setIsRegistered] = useState(false);

  const changeFormClickHandler = () => {
    setIsRegistered((prevState) => {
      return !prevState;
    });
  };

  let displayForm = "";

  switch (FormUserType) {
    case "Donor":
      if (!IsRegistered) {
        displayForm = <DonorSignUpForm onChangeFormType={changeFormClickHandler} />;
      } else {
        displayForm = <DonorLogInForm onChangeFormType={changeFormClickHandler} />;
      }
      break;
    case "Hospital":
      if (!IsRegistered) {
        displayForm = <HospitalSignUpForm onChangeFormType={changeFormClickHandler} />;
      } else {
        displayForm = <HospitalLogInForm onChangeFormType={changeFormClickHandler} />;
      }
      break;
    case "Organization":
      if (!IsRegistered) {
        displayForm = <OrganizationSignUpForm onChangeFormType={changeFormClickHandler} />;
      } else {
        displayForm = <OrganizationLogInForm onChangeFormType={changeFormClickHandler} />;
      }
      break;
    default:
      displayForm = "";
      break;
  }

  const userTypeClickHandler = (evt) => {
    if (FormUserType !== evt.target.innerText) {
      setFormUserType(evt.target.innerText);
    }
  };

  return (
    <section id="signUp" className={classes.signUp}>
      <div className={classes.multiForm}>
        <div className={classes.multiForm__action}>
          <button
            onClick={userTypeClickHandler}
            type="button"
            className={`${FormUserType === "Donor" ? classes["multiForm__btn--active"] : ""} ${classes.multiForm__btn}`}
          >
            Donor
          </button>

          <button
            onClick={userTypeClickHandler}
            type="button"
            className={`${FormUserType === "Hospital" ? classes["multiForm__btn--active"] : ""}  ${classes.multiForm__btn}`}
          >
            Hospital
          </button>

          <button
            onClick={userTypeClickHandler}
            type="button"
            className={`${FormUserType === "Organization" ? classes["multiForm__btn--active"] : ""}  ${classes.multiForm__btn}`}
          >
            Organization
          </button>
        </div>
        <div className={classes.multiForm__form}>{displayForm}</div>
      </div>
    </section>
  );
};

export default SignUpSection;
