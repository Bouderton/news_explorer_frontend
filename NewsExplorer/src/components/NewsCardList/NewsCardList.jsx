import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import { SavedArticleContext } from "../../contexts/SavedArticleContext";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const NewsCardList = ({
  loggedIn,
  isSavedNews,
  isLoading,
  searching,
  showMoreArticles,
  openPopup,
  handleSaveArticle,
  error,
}) => {
  const route = useLocation();

  const { articles, shownArticles } = useContext(ArticleContext);
  const { savedArticles } = useContext(SavedArticleContext);

  return (
    <>
      {/* HOME PAGE NEWS CARD LIST */}
      {route.pathname === "/" ? (
        <>
          {!searching && error ? (
            <p className="card__search-error">{error}</p>
          ) : null}
          {searching ? (
            // Search and Loader Components
            <section className="card__section">
              <h3 className="card__section-text">Search Results</h3>
              {isLoading ? (
                <>
                  <Preloader />
                </>
              ) : null}
              {!isLoading && articles.length === 0 ? (
                <>
                  <NotFound />
                </>
              ) : null}
              {/* Rendering cards through search */}
              <div className="card__list-container">
                <ul className="card__list">
                  {articles.slice(0, shownArticles).map((article, index) => {
                    return (
                      <li className="card__list-item" key={index}>
                        <NewsCard
                          key={index}
                          article={article}
                          loggedIn={loggedIn}
                          openPopup={openPopup}
                          handleSaveArticle={handleSaveArticle}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="card__button-container">
                {articles.length === 100 ? null : (
                  <button
                    type="text"
                    className="card__button"
                    onClick={showMoreArticles}
                  >
                    Show More
                  </button>
                )}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        // Rendering saved articles
        <>
          <section className="card__section">
            <div className="card__list-container">
              <ul className="card__list">
                {savedArticles.map((savedArticle, index) => {
                  return (
                    <li className="card__list-item">
                      <NewsCard
                        key={index}
                        savedArticle={savedArticle}
                        isSavedNews={isSavedNews}
                        loggedIn={loggedIn}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default NewsCardList;
