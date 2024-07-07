import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import RegisterPopup from "../RegisterPopup/RegisterPopup";

const Main = () => {
  return (
    <main className="main">
      <NewsCardList />
      <About />
      <RegisterPopup />
    </main>
  );
};

export default Main;
