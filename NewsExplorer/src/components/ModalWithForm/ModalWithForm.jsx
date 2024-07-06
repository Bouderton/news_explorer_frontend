import "./ModalWithForm.css";

const ModalWithForm = ({ title, buttonText, children }) => {
  return (
    <div className="modal modal__opened">
      <div className="modal__content">
        <h3 className="modal__form-title">{title}</h3>
        <form className="modal__form">
          {children}
          <button type="text" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
