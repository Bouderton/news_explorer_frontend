import { useState, useEffect } from "react";
import PopupWithForm from "../PopupForm/PopupForm";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const RegisterPopup = ({ isOpen, closePopup, handleLoginPopup }) => {
  const inputValues = {
    email: "",
    password: "",
    username: "",
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
    >
      <label className="popup__form-label">Email</label>
      <input
        required
        min="1"
        max="30"
        className="popup__form-input"
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
        value={values.password}
        name="password"
        type="password"
        onChange={handleChange}
        className="popup__form-input"
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
        value={values.username}
        name="username"
        type="text"
        onChange={handleChange}
        className="popup__form-input input_password"
        placeholder="Enter Username"
      ></input>
      {errors.email && (
        <span className="popup__form-error">{errors.email}</span>
      )}
      {isValid ? (
        <button type="text" className="popup__submit-button button_enabled">
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
