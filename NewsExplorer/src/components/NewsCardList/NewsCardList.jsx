import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useState } from "react";

const NewsCardList = ({ loggedIn, isSavedNews, articles }) => {
  // need to pass news data to news cards

  return (
    <div className="card__section">
      {loggedIn ? (
        ""
      ) : (
        <>
          <h3 className="card__section-text">Search Results</h3>
        </>
      )}
      <div className="card__grid-container">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} isSavedNews={isSavedNews} />
        ))}
      </div>
      <div className="card__button-container">
        <button type="text" className="card__button">
          Show More
        </button>
      </div>
    </div>
  );
};

export default NewsCardList;
