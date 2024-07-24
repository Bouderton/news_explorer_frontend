import "./NavigationMobile.css";
import { useState } from "react";

const NavigationMobile = ({ openPopup, isSavedNews }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(true);
  }

  function closeDropdown() {
    setDropdown(false);
  }

  return (
    <nav className="nav__mobile">
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
        className={`nav__dropdown ${dropdown ? "nav__dropdown-opened" : ""}`}
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
          <button type="text" className="nav__home-button">
            Home
          </button>
          <button
            type="text"
            className="nav__mobile-button-register"
            onClick={openPopup}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMobile;
