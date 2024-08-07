import { useState, useEffect } from "react";
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
import { UserContext } from "../../contexts/UserContext";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleRegisterPopup = () => {
    setActivePopup("register");
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  const handleLoginPopup = () => {
    setActivePopup("login");
  };

  useEffect(() => {
    if (!activePopup) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activePopup]);

  return (
    <>
      <UserContext.Provider value={user}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main openPopup={handleLoginPopup} />} />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  loggedIn={true}
                  name={"User"}
                  num={3}
                  openPopup={handleRegisterPopup}
                />
              }
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
      </UserContext.Provider>
    </>
  );
}

// NOTES AND TODO
// FORM VALIDATION
// USER STATE
// FINISH FRONT-END BY WEDNESDAY
// PRAY

export default App;
