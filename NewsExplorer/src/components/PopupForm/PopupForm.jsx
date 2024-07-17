import "./PopupForm.css";

const PopupWithForm = ({
  title,
  buttonText,
  children,
  spanText,
  onClose,
  isOpen,
  closePopup,
}) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <button
        type="button"
        className="popup__close-button"
        onClick={closePopup}
      />
      <div className="popup__content">
        <h3 className="popup__form-title">{title}</h3>
        <form className="popup__form">
          {children}
          <button type="text" className="popup__submit-button">
            {buttonText}
          </button>
        </form>
        <button type="text" className="popup__or-button">
          or {spanText}
        </button>
      </div>
    </div>
  );
};

export default PopupWithForm;
