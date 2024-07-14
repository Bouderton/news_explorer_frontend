import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  const [activePopup, setActivePopup] = useState("");

  const handleRegisterPopup = () => {
    setActivePopup("register");
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  return (
    <>
      <div className="page">
        <Header openPopup={handleRegisterPopup} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={<SavedNews isSavedPage={true} name={"Person"} num={3} />}
          />
        </Routes>
        <Footer />
        <RegisterPopup
          isOpen={activePopup === "register"}
          closePopup={handleClosePopup}
        />
      </div>
    </>
  );
}

// NOTES
// MAKE THE DESIGN ADAPTIVE
// PRAY

export default App;
