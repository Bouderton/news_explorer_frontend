import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const Main = ({ openPopup, searching, articles, isLoading }) => {
  return (
    <main className="main">
      <NewsCardList
        articles={articles}
        searching={searching}
        isLoading={isLoading}
      />
      <About />
    </main>
  );
};

export default Main;
