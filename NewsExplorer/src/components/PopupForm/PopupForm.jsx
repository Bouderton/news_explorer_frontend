import "./PopupForm.css";

const PopupWithForm = ({
  title,
  children,
  spanText,
  isOpen,
  closePopup,
  popupSwitch,
  onSubmit,
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
        <form className="popup__form" onSubmit={onSubmit}>
          {children}
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
