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
}) => {
  // need to pass news data to news cards

  const { articles, shownArticles } = useContext(ArticleContext);

  return (
    <>
      {searching ? (
        <div className="card__section">
          {loggedIn ? (
            ""
          ) : (
            <>
              <h3 className="card__section-text">Search Results</h3>
              {isLoading ? (
                <>
                  <Preloader />
                </>
              ) : null}
            </>
          )}
          <div className="card__grid-container">
            {articles.slice(0, shownArticles).map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                isSavedNews={isSavedNews}
              />
            ))}
          </div>
          <div className="card__button-container">
            <button
              type="text"
              className="card__button"
              onClick={showMoreArticles}
            >
              Show More
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsCardList;
