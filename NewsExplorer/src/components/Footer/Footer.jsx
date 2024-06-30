import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-copyright">
          &copy; Supersite, Powered by News API
        </p>
        <div className="footer__content-list-container">
          <ul className="footer__content-list">
            <li className="footer__content_list-item">
              <p className="footer__content_list-text">Home</p>
            </li>
            <li className="footer__content_list-item">
              <p className="footer__content_list-text">TripleTen</p>
            </li>
            <li className="footer__content-list-item">
              <img src={github} className="footer__content_list-img" />
            </li>
            <li className="footer__content-list-item">
              <img src={linkedin} className="footer__content_list-img" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
