import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  searching,
  openPopup,
  isLoading,
  showMoreArticles,
  loggedIn,
  handleSaveArticle,
}) => {
  return (
    <main className="main">
      <NewsCardList
        loggedIn={loggedIn}
        searching={searching}
        isLoading={isLoading}
        showMoreArticles={showMoreArticles}
        openPopup={openPopup}
        handleSaveArticle={handleSaveArticle}
      />
      <About />
    </main>
  );
};

export default Main;
