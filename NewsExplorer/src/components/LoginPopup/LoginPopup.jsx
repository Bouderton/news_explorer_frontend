import PopupForm from "../PopupForm/PopupForm";
import { useState, useEffect } from "react";

const LoginPopup = ({ isOpen, closePopup, handleRegisterPopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);
  return (
    <PopupForm
      isOpen={isOpen}
      closePopup={closePopup}
      title="Sign In"
      buttonText="Sign In"
      spanText="Sign Up"
      popupSwitch={handleRegisterPopup}
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
        value={email}
        onChange={handleEmailChange}
      ></input>
      <label className="popup__form-label">Password</label>
      <input
        required
        min="2"
        max="30"
        className="popup__form-input"
        placeholder="Enter Password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
    </PopupForm>
  );
};

export default LoginPopup;
