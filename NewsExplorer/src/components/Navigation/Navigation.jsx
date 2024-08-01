import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import logout_icon from "../../images/logout_icon.svg";
import { UserContext } from "../../contexts/UserContext";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Navigation = ({ loggedIn, name, openPopup, isSavedNews }) => {
  const route = useLocation();

  const currentUser = useContext(UserContext);

  return (
    <>
      <div className="nav__container">
        {route.pathname === "/" ? (
          <nav className="nav">
            <h2 className="nav__title">NewsExplorer</h2>
            <div className="nav__buttons">
              {loggedIn ? (
                <>
                  <button type="text" className="nav__button">
                    Home
                  </button>
                  <button type="text" className="nav__button-saved">
                    <Link
                      to="/saved-news"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "100%",
                      }}
                    >
                      Saved Articles
                    </Link>
                  </button>
                  <button type="text" className="nav__button-logout">
                    {JSON.stringify(currentUser)}
                    <img
                      src={logout_icon}
                      className="nav__button-logout-icon"
                    />
                  </button>
                </>
              ) : (
                <>
                  <button type="text" className="nav__button">
                    Home
                  </button>
                  <button className="nav__button-register">Sign In</button>
                </>
              )}
            </div>
          </nav>
        ) : null}
      </div>
      {/* <div className="nav__container">
        <nav
          className={`nav ${
            route.pathname === "/saved-news" ? "nav_dark" : ""
          }`}
        >
          {loggedIn && isSavedNews ? (
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
      </div> */}
    </>
  );
};

export default Navigation;
