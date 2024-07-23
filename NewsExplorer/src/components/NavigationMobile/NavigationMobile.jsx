import "./NavigationMobile.css";

const NavigationMobile = ({ openPopup, isOpen }) => {
  return (
    <nav className="nav__mobile">
      <h2 className="nav__mobile-title">NewsExplorer</h2>
      <button type="button" className="nav__mobile-button" />
      <div className={`nav__dropdown ${isOpen ? "nav__dropdown-opened" : ""}`}>
        <div className="nav__dropdown-top">
          <h2 className="nav__mobile-title">NewsExplorer</h2>
          <button type="button" className="nav__dropdown-close-button" />
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
