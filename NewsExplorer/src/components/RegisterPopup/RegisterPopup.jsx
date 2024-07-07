import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const RegisterPopup = () => {
  return (
    <PopupWithForm title="Sign Up" buttonText="Sign Up">
      <label className="popup__form-label">
        Email
        <input
          required
          min="1"
          max="30"
          className="popup__form-input"
          placeholder="Enter Email"
          type="email"
        ></input>
      </label>
      <label className="popup__form-label">
        Password
        <input
          required
          min="2"
          max="30"
          className="popup__form-input"
          placeholder="Enter Password"
        ></input>
      </label>
    </PopupWithForm>
  );
};

export default RegisterPopup;
