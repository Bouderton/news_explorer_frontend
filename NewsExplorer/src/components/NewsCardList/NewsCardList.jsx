import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useState } from "react";

const NewsCardList = ({ isSavedPage }) => {
  // need to pass news data to news cards

  return (
    <div className="card__section">
      {isSavedPage ? (
        ""
      ) : (
        <>
          <h3 className="card__section-text">Search Results</h3>
        </>
      )}
      <div className="card__grid-container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
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
