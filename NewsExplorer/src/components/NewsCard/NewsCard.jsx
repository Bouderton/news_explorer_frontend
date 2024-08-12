import "./NewsCard.css";
import { useState } from "react";

const NewsCard = ({ isSavedNews, article, loggedIn, openPopup }) => {
  // cards accept news data

  const [clicked, setClicked] = useState(false);
  const [visible, setVisibile] = useState(false);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const convertDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  const handleHover = () => {
    setVisibile(true);
  };

  const handleHoverOut = () => {
    setVisibile(false);
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
        <>
          {loggedIn === true ? (
            <button
              onClick={handleClick}
              type="radio"
              className={`${
                clicked ? "card__bookmark-active" : "card__bookmark"
              }`}
            />
          ) : (
            <>
              <button
                disabled
                className="card__bookmark-disabled"
                onMouseOver={handleHover}
              />
              <button
                onClick={openPopup}
                onMouseOut={handleHoverOut}
                type="text"
                className={`card__signin ${
                  visible === true ? "signin_reveal" : ""
                }`}
              >
                Sign in to save articles
              </button>
            </>
          )}
        </>
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
          <p className="card__date">{convertDate(article.publishedAt)}</p>
          <h3 className="card__title title_clamp">{article.title}</h3>
          <p className="card__text text_clamp">{article.description}</p>
          <p className="card__author">{article.source.name}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
