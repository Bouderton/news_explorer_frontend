import "./NavigationMobile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logout_light from "../../images/logout_light.svg";

const NavigationMobile = ({ route, loggedIn, openPopup, isSavedNews }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(true);
  }

  function closeDropdown() {
    setDropdown(false);
  }

  return (
    <nav className="nav__mobile">
      {loggedIn ? (
        <>
          <h2 className={`nav__mobile-title ${isSavedNews ? "nav_saved" : ""}`}>
            NewsExplorer
          </h2>
          <button
            onClick={handleDropdown}
            type="button"
            className={`${
              isSavedNews ? "nav__mobile-button-dark" : "nav__mobile-button"
            }`}
          />
          <div
            style={{ height: "275px" }}
            className={`nav__dropdown ${
              dropdown ? "nav__dropdown-opened" : ""
            }`}
          >
            <div className="nav__dropdown-top">
              <h2 className="nav__mobile-title">NewsExplorer</h2>
              <button
                type="button"
                className="nav__dropdown-close-button"
                onClick={closeDropdown}
              />
            </div>
            <div className="nav__mobile-buttons">
              <button type="text" className="nav__mobile-menu-button">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </button>
              <button className="nav__mobile-menu-button" type="text">
                <Link
                  to="/saved-news"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Saved Articles
                </Link>
              </button>
              <button type="text" className="nav__mobile-button__logout">
                {"Test Name"}
                <img
                  src={logout_light}
                  className="nav__mobile-button__logout-icon"
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2
            className={`nav__mobile-title ${
              route.pathname === "/saved-news" ? "nav_saved" : ""
            }`}
          >
            NewsExplorer
          </h2>
          <button
            onClick={handleDropdown}
            type="button"
            className={`${
              isSavedNews ? "nav__mobile-button-dark" : "nav__mobile-button"
            }`}
          />
          <div
            className={`nav__dropdown ${
              dropdown ? "nav__dropdown-opened" : ""
            }`}
          >
            <div className="nav__dropdown-top">
              <h2 className="nav__mobile-title">NewsExplorer</h2>
              <button
                type="button"
                className="nav__dropdown-close-button"
                onClick={closeDropdown}
              />
            </div>
            <div className="nav__mobile-buttons">
              <button type="text" className="nav__mobile-menu-button">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </button>
              {route.pathname === "/saved-news" ? (
                <>
                  <button
                    type="text"
                    className="nav__mobile-button__logout"
                    style={{ color: "#1a1b22" }}
                  >
                    {"Test Name"}
                    <img
                      src={logout_light}
                      className="nav__mobile-button__logout-icon"
                    />
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="text"
                    className="nav__mobile-button-register"
                    onClick={openPopup}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavigationMobile;
