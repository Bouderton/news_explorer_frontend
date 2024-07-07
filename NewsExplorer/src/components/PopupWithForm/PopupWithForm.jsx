import "./PopupWithForm.css";

const PopupWithForm = ({ title, buttonText, children }) => {
  return (
    <div className="popup popup__opened">
      <div className="popup__content">
        <h3 className="popup__form-title">{title}</h3>
        <form className="popup__form">
          {children}
          <button type="text" className="popup__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
