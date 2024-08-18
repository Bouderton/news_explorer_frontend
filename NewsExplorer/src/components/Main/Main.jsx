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
  error,
}) => {
  return (
    <main className="main">
      <NewsCardList
        error={error}
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
