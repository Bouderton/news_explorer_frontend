import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-copyright">
          &copy; Supersite, Powered by News API
        </p>
        <div className="footer__content-social">
          <p>Home</p>
          <p>TripleTen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
