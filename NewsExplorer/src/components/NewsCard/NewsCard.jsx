import "./NewsCard.css";
import doggy from "../../images/doggy.jpg";
import { useState } from "react";
// import bookmark from "../../images/bookmark.svg";

const NewsCard = ({ isSavedNews }) => {
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
        <img src={doggy} className="card__image" alt="News Card Image" />
        <div className="card__text-container">
          <p className="card__date">January 1st 2000</p>
          <h3 className="card__title">Good Boy</h3>
          <p className="card__text">
            whosagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywho
            sagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywhos
            agoodboywhosagoodboywhosagoodboywwhosagoodboywhosagoodboywhosagoodboywhos
            whosagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywhosagoodboywho
          </p>
          <p className="card__author">National Geographic</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
