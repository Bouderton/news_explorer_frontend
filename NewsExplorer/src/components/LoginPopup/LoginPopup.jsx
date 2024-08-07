import PopupForm from "../PopupForm/PopupForm";
import { useState, useEffect } from "react";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const LoginPopup = ({ isOpen, closePopup, handleRegisterPopup }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = (value) => {
    setInputFocus(value);
  };

  const handleInputBlur = () => {
    setInputFocus(null);
  };

  const inputValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  useEffect(() => {
    if (isOpen) {
      resetForm(inputValues);
    }
  }, [isOpen]);
  return (
    <PopupForm
      isOpen={isOpen}
      closePopup={closePopup}
      title="Sign In"
      // buttonText="Sign In"
      spanText="Sign Up"
      popupSwitch={handleRegisterPopup}
    >
      <label className="popup__form-label">Email</label>
      <input
        required
        min="1"
        max="30"
        className={`popup__form-input ${
          inputFocus === "email" ? "input-focussed" : ""
        }`}
        onFocus={() => handleInputFocus("email")}
        onBlur={handleInputBlur}
        placeholder="Enter Email"
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      <label className="popup__form-label">Password</label>
      <input
        required
        min="2"
        max="30"
        className={`popup__form-input ${
          inputFocus === "password" ? "input-focussed" : ""
        }`}
        onFocus={() => handleInputFocus("password")}
        onBlur={handleInputBlur}
        placeholder="Enter Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      {isValid ? (
        <button type="text" className="popup__submit-button button_enabled">
          Sign In
        </button>
      ) : (
        <button
          disabled
          type="text"
          className="popup__submit-button button_disabled"
        >
          Sign In
        </button>
      )}
    </PopupForm>
  );
};

export default LoginPopup;
