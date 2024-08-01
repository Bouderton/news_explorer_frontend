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
              <div className="footer__content_text-container">
                <p className="footer__content_list-text">Home</p>
                <p className="footer__content_list-text">TripleTen</p>
              </div>
            </li>
            <li className="footer__content-list-item">
              <div className="footer__content_buttons-container">
                <a
                  rel="noopener noreferer"
                  target="_blank"
                  href="https://github.com/Bouderton"
                >
                  <img src={github} className="footer__content_list-img" />
                </a>
                <a
                  rel="noopener noreferer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ryankhazal/"
                >
                  <img src={linkedin} className="footer__content_list-img" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
