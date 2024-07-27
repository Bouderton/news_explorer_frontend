import { useState, useEffect } from "react";
import PopupWithForm from "../PopupForm/PopupForm";

const RegisterPopup = ({ isOpen, closePopup, handleLoginPopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

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
      setUsername("");
    }
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
        onChange={handleEmailChange}
        value={email}
      ></input>
      <label className="popup__form-label">Password</label>
      <input
        required
        min="2"
        max="30"
        value={password}
        name="password"
        type="password"
        onChange={handlePasswordChange}
        className="popup__form-input"
        placeholder="Enter Password"
      ></input>
      <label className="popup__form-label">Username</label>
      <input
        required
        min="2"
        max="30"
        value={username}
        name="username"
        type="text"
        onChange={handleUsernameChange}
        className="popup__form-input input_password"
        placeholder="Enter Username"
      ></input>
    </PopupWithForm>
  );
};

export default RegisterPopup;
