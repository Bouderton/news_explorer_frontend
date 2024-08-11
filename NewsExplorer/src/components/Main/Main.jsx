import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

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
