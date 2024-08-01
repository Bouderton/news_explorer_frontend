import "./Header.css";
import header_background from "../../images/header_background.png";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

const Header = ({ openPopup }) => {
  return (
    <header className="header">
      <img
        src={header_background}
        className="header__background-image"
        alt="Background Image"
      />
      <Navigation openPopup={openPopup} loggedIn={true} />
      <SearchForm />
    </header>
  );
};

export default Header;
