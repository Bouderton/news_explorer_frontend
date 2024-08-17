import { useState, useEffect } from "react";
import PopupWithForm from "../PopupForm/PopupForm";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const RegisterPopup = ({
  isOpen,
  closePopup,
  handleLoginPopup,
  handleSuccessPopup,
}) => {
  const [inputFocus, setInputFocus] = useState(false);

  const inputValues = {
    email: "",
    password: "",
    username: "",
  };

  const handleInputFocus = (value) => {
    setInputFocus(value);
  };

  const handleInputBlur = () => {
    setInputFocus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccessPopup();
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  useEffect(() => {
    resetForm(inputValues);
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      closePopup={closePopup}
      title="Sign Up"
      buttonText="Sign Up"
      spanText="Sign In"
      popupSwitch={handleLoginPopup}
      orText={true}
    >
      <label className="popup__form-label">Email</label>
      <input
        required
        min="1"
        max="30"
        onFocus={() => handleInputFocus("email")}
        className={`popup__form-input ${
          inputFocus === "email" ? "input-focussed" : ""
        }`}
        placeholder="Enter Email"
        type="text"
        name="email"
        onChange={handleChange}
        value={values.email}
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      <label className="popup__form-label">Password</label>
      <input
        required
        min="2"
        max="30"
        onFocus={() => handleInputFocus("password")}
        onBlur={handleInputBlur}
        value={values.password}
        name="password"
        type="password"
        onChange={handleChange}
        className={`popup__form-input ${
          inputFocus === "password" ? "input-focussed" : ""
        }`}
        placeholder="Enter Password"
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      <label className="popup__form-label">Username</label>
      <input
        required
        min="2"
        max="30"
        onFocus={() => handleInputFocus("username")}
        onBlur={handleInputBlur}
        value={values.username}
        name="username"
        type="text"
        onChange={handleChange}
        className={`popup__form-input ${
          inputFocus === "username" ? "input-focussed" : ""
        }`}
        placeholder="Enter Username"
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      {isValid ? (
        /* until backend is created there is no way of verifying user data
        so it automatically assumes a valid registration for now */
        <button
          type="text"
          className="popup__submit-button button_enabled"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      ) : (
        <button
          disabled
          type="text"
          className="popup__submit-button button_disabled"
        >
          Sign Up
        </button>
      )}
    </PopupWithForm>
  );
};

export default RegisterPopup;
