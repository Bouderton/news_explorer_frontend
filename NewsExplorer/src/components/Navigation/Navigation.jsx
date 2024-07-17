import "./Navigation.css";
import logout_icon from "../../images/logout_icon.svg";

const Navigation = ({ isSavedPage, name, openPopup }) => {
  return (
    <nav className="nav">
      {isSavedPage ? (
        <>
          <h2 className="nav__title-saved">NewsExplorer</h2>
          <div className="nav__buttons-saved">
            <button type="text" className="nav__button-saved">
              Home
            </button>
            <button type="text" className="nav__button-saved">
              Saved Articles
            </button>
            <button type="text" className="nav__button-logout">
              {name}
              <img src={logout_icon} className="nav__button-logout-icon" />
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="nav__title">NewsExplorer</h2>
          <div className="nav__buttons">
            <button type="text" className="nav__button">
              Home
            </button>
            <button
              type="text"
              className="nav__button-register"
              onClick={openPopup}
            >
              Sign In
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
