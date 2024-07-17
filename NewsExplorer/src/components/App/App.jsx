import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegisterPopup = () => {
    setActivePopup("register");
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  const handleLoginPopup = () => {
    setActivePopup("login");
  };

  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main openPopup={handleLoginPopup} />} />
          <Route
            path="/saved-news"
            element={<SavedNews loggedIn={true} name={"Person"} num={3} />}
          />
        </Routes>
        <Footer />
        <RegisterPopup
          isOpen={activePopup === "register"}
          closePopup={handleClosePopup}
          handleLoginPopup={handleLoginPopup}
        />
        <LoginPopup
          isOpen={activePopup === "login"}
          closePopup={handleClosePopup}
          handleRegisterPopup={handleRegisterPopup}
        />
      </div>
    </>
  );
}

// NOTES
// MAKE THE DESIGN ADAPTIVE
// PRAY

export default App;
