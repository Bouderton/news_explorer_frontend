import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useState, useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const NewsCardList = ({
  loggedIn,
  isSavedNews,
  isLoading,
  searching,
  showMoreArticles,
  openPopup,
}) => {
  // need to pass news data to news cards

  const { articles, shownArticles } = useContext(ArticleContext);

  return (
    <>
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
                isSavedNews={isSavedNews}
                loggedIn={loggedIn}
                openPopup={openPopup}
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
  );
};

export default NewsCardList;
