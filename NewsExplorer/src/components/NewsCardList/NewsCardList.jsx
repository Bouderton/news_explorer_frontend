import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useState, useContext } from "react";
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
  // need to pass news data to news cards

  const route = useLocation();

  const { articles, shownArticles } = useContext(ArticleContext);
  const { savedArticles } = useContext(SavedArticleContext);

  return (
    <>
      {route.pathname === "/" ? (
        <>
          {!searching && error ? (
            <p className="card__search-error">{error}</p>
          ) : null}
          {searching ? (
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
              <div className="card__grid-container">
                {articles.slice(0, shownArticles).map((article, index) => (
                  <NewsCard
                    key={index}
                    article={article}
                    loggedIn={loggedIn}
                    openPopup={openPopup}
                    handleSaveArticle={handleSaveArticle}
                  />
                ))}
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
        <>
          <section className="card__section">
            <div className="card__grid-container">
              {savedArticles.map((savedArticle, index) => {
                return (
                  <NewsCard
                    key={index}
                    savedArticle={savedArticle}
                    isSavedNews={isSavedNews}
                    loggedIn={loggedIn}
                  />
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default NewsCardList;
