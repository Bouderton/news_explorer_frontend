import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCardList from "../NewsCardList/NewsCardList";
import { UserContext } from "../../contexts/UserContext";
import { SavedArticleContext } from "../../contexts/SavedArticleContext";
import { useContext, useEffect } from "react";
import { getTempCards } from "../../utils/NewsApi";

const SavedNews = ({
  loggedIn,
  isSavedNews,
  openPopup,
  handleLogout,
  handleEditPopup,
}) => {
  const currentUser = useContext(UserContext);
  const { savedArticles, setSavedArticles } = useContext(SavedArticleContext);

  // TEMPORARY SAVED CARDS JUST SEARCHING FOR TOP HEADLINES NO BACKEND YET
  useEffect(() => {
    if (isSavedNews) {
      getTempCards().then((data) => {
        const filteredArticles = data.articles.filter(
          (savedArticle) =>
            savedArticle.urlToImage &&
            savedArticle.title &&
            !savedArticle.title.includes("[Removed]")
        );
        setSavedArticles(filteredArticles);
      });
    }
  }, [isSavedNews]);

  return (
    <section className="saved">
      <header className="saved__header">
        <Navigation
          loggedIn={loggedIn}
          isSavedNews={isSavedNews}
          openPopup={openPopup}
          handleLogout={handleLogout}
          handleEditPopup={handleEditPopup}
        />
        <div className="saved__text-container">
          <p className="saved__text-subtitle">Saved Articles</p>
          <h1 className="saved__text-title">{`${currentUser?.data.name}, you have ${savedArticles.length} saved articles`}</h1>
          <p className="saved__text-keywords">
            By keywords:
            <span className="saved__text-span">
              {" "}
              word, word, words and 2 others
            </span>
          </p>
        </div>
      </header>
      <NewsCardList loggedIn={loggedIn} isSavedNews={isSavedNews} />
    </section>
  );
};

export default SavedNews;
