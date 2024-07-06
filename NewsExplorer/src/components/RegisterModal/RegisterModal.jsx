import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = () => {
  return (
    <ModalWithForm title="Sign Up" buttonText="Sign Up">
      <label className="modal__form-label">
        Email
        <input
          required
          min="1"
          max="30"
          className="modal__form-input"
          placeholder="Enter Email"
          type="email"
        ></input>
      </label>
      <label className="modal__form-label">
        Password
        <input
          required
          min="2"
          max="30"
          className="modal__form-input"
          placeholder="Enter Password"
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
