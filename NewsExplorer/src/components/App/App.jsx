import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
