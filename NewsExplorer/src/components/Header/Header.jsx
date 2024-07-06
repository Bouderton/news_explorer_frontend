import "./Header.css";
import header_background from "../../images/header_background.png";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <header className="header">
      <img
        src={header_background}
        className="header__background-image"
        alt="Background Image"
      />
      <nav className="header__nav">
        <h2 className="header__nav-title">News Explorer</h2>
        <div className="header__nav-buttons">
          <button type="text" className="header__nav-button-home">
            Home
          </button>
          <button type="text" className="header__nav-button-register">
            Sign In
          </button>
        </div>
      </nav>
      <SearchForm />
    </header>
  );
};

export default Header;
