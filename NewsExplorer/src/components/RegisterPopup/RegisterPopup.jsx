import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const RegisterPopup = ({ isOpen, handleClosePopup, handleRegister }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Sign Up"
      buttonText="Sign Up"
      spanText="Sign In"
    >
      <label className="popup__form-label">Email</label>
      <input
        required
        min="1"
        max="30"
        className="popup__form-input"
        placeholder="Enter Email"
        type="email"
      ></input>
      <label className="popup__form-label">Password</label>
      <input
        required
        min="2"
        max="30"
        className="popup__form-input"
        placeholder="Enter Password"
      ></input>
    </PopupWithForm>
  );
};

export default RegisterPopup;
