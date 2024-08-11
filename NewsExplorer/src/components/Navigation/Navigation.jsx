import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import logout_light from "../../images/logout_light.svg";
import logout_dark from "../../images/logout_dark.svg";
import { UserContext } from "../../contexts/UserContext";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Navigation = ({ loggedIn, openPopup, isSavedNews, handleLogout }) => {
  const route = useLocation();

  const currentUser = useContext(UserContext);

  return (
    <>
      <div className="nav__container">
        {route.pathname === "/" ? (
          <nav
            className="nav"
            style={{ borderBottom: "0.5px solid", borderColor: "white" }}
          >
            <h2 className="nav__title">NewsExplorer</h2>
            {loggedIn ? (
              <>
                <div className="nav__buttons" style={{ gap: "15px" }}>
                  <button type="text" className="nav__button">
                    Home
                  </button>
                  <button type="text" className="nav__button-saved">
                    <Link
                      to="/saved-news"
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Saved Articles
                    </Link>
                  </button>
                  <button
                    type="text"
                    className="nav__button-logout"
                    onClick={handleLogout}
                  >
                    {currentUser?.data.name}
                    <img
                      src={logout_light}
                      className="nav__button-logout-icon"
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="nav__buttons">
                  <button type="text" className="nav__button">
                    Home
                  </button>
                  <button className="nav__button-register" onClick={openPopup}>
                    Sign In
                  </button>
                </div>
              </>
            )}
          </nav>
        ) : (
          <>
            <nav
              className="nav"
              style={{ borderBottom: "0.5px solid", borderColor: "#1a1b22" }}
            >
              <h2 className="nav__title" style={{ color: "#1a1b22" }}>
                NewsExplorer
              </h2>
              <div className="nav__buttons" style={{ gap: "15px" }}>
                <button type="text" className="nav__button">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#1a1b22" }}
                  >
                    Home
                  </Link>
                </button>
                <button
                  type="text"
                  className="nav__button-saved"
                  style={{ color: "#1a1b22" }}
                >
                  Saved Articles
                </button>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#1a1b22" }}
                >
                  <button
                    type="text"
                    className="nav__button-logout"
                    style={{ color: "#1a1b22" }}
                    onClick={handleLogout}
                  >
                    {currentUser?.data.name}
                    <img
                      src={logout_dark}
                      className="nav__button-logout-icon"
                    />
                  </button>
                </Link>
              </div>
            </nav>
          </>
        )}
        <div className="nav__mobile-toggle">
          <NavigationMobile
            openPopup={openPopup}
            isSavedNews={isSavedNews}
            loggedIn={loggedIn}
            route={route}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
