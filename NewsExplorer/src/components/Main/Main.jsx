import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  searching,
  openPopup,
  isLoading,
  showMoreArticles,
  loggedIn,
}) => {
  return (
    <main className="main">
      <NewsCardList
        loggedIn={loggedIn}
        searching={searching}
        isLoading={isLoading}
        showMoreArticles={showMoreArticles}
        openPopup={openPopup}
      />
      <About />
    </main>
  );
};

export default Main;
