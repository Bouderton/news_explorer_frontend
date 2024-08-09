import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const Main = ({ searching, isLoading, showMoreArticles }) => {
  return (
    <main className="main">
      <NewsCardList
        searching={searching}
        isLoading={isLoading}
        showMoreArticles={showMoreArticles}
      />
      <About />
    </main>
  );
};

export default Main;
