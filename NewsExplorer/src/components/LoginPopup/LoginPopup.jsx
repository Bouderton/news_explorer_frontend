import PopupForm from "../PopupForm/PopupForm";

const LoginPopup = ({ isOpen, closePopup, handleRegisterPopup }) => {
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
    </PopupForm>
  );
};

export default LoginPopup;
