import "./PopupWithForm.css";

const PopupWithForm = ({ title, buttonText, children, spanText, onClose }) => {
  return (
    <div className="popup popup_opened">
      <div className="popup__content">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
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
