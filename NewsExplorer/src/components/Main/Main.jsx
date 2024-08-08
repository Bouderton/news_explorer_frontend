import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const Main = ({ openPopup, articles }) => {
  return (
    <main className="main">
      {/* <Header openPopup={openPopup} /> */}
      {/* <Preloader />
      <NotFound /> */}
      {/* <NewsCardList articles={articles} /> */}
      <About />
    </main>
  );
};

export default Main;
