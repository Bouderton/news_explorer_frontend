import "./Header.css";
import header_background from "../../images/header_background.png";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar">
        <h2 className="header__bar-title">News Explorer</h2>
        <div className="header__bar-buttons">
          <button type="text" className="header__bar-button-home">
            Home
          </button>
          <button type="text" className="header__bar-button-register">
            Sign In
          </button>
        </div>
      </div>
      <img src={header_background} className="header__background-image" />
      <div>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
