import "./Navigation.css";
import { Link } from "react-router-dom";
import logout_icon from "../../images/logout_icon.svg";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Navigation = ({ loggedIn, name, openPopup, isSavedNews }) => {
  return (
    <>
      <nav className="nav">
        {loggedIn ? (
          <>
            <h2 className="nav__title-saved">NewsExplorer</h2>
            <div className="nav__buttons-saved">
              <button type="text" className="nav__button-saved">
                <Link
                  style={{ textDecoration: "none", color: "#1a1b22" }}
                  to="/"
                >
                  Home
                </Link>
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
      <div className="nav__mobile-toggle">
        <NavigationMobile openPopup={openPopup} isSavedNews={isSavedNews} />
      </div>
    </>
  );
};

export default Navigation;
