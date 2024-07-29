import "./PopupForm.css";
import { useForm } from "../../Hooks/useForm";

const PopupWithForm = ({
  title,
  buttonText,
  children,
  spanText,
  isOpen,
  closePopup,
  popupSwitch,
}) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          type="button"
          className="popup__close-button"
          onClick={closePopup}
        />
        <h3 className="popup__form-title">{title}</h3>
        <form className="popup__form">
          {children}
          <button type="text" className="popup__submit-button button_disabled">
            {buttonText}
          </button>
        </form>
        <p className="popup__or-text">
          or
          <button
            onClick={popupSwitch}
            type="text"
            className="popup__or-button"
          >
            {spanText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default PopupWithForm;
