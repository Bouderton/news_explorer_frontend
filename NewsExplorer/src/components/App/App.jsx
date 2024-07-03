import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function App() {
  const { loggedIn, isLoggedIn } = useState(false);
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

// NOTES
// MAKE THE DESIGN ADAPTIVE
// PRAY

export default App;
