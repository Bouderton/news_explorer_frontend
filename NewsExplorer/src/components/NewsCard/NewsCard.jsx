import "./NewsCard.css";
import doggy from "../../images/doggy.jpg";
import { useState, useContext } from "react";
// import bookmark from "../../images/bookmark.svg";
import { ArticleContext } from "../../contexts/ArticleContext";

const NewsCard = ({ isSavedNews, article }) => {
  // cards accept news data

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };
  return (
    <div className="card__container">
      {isSavedNews ? (
        <>
          <button className="card__trashcan" type="button" />
          <div className="card__keyword-container">
            <p className="card__keyword">Keyword</p>
          </div>
        </>
      ) : (
        <button
          onClick={handleClick}
          type="radio"
          className={`${clicked ? "card__bookmark-active" : "card__bookmark"}`}
        />
      )}
      <div className="card">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            className="card__image"
            alt={article.title}
          />
        )}

        <div className="card__text-container">
          <p className="card__date">{article.publishedAt}</p>
          <h3 className="card__title">{article.title}</h3>
          <p className="card__text">{article.description}</p>
          <p className="card__author">{article.name}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
