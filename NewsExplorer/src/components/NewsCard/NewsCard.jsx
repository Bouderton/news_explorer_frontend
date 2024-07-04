import "./NewsCard.css";
import card_image_placeholder from "../../images/card-image-placeholder.png";

const NewsCard = () => {
  // cards accept news data
  return (
    <div className="card__container">
      <div className="card">
        <img
          src={card_image_placeholder}
          className="card__image"
          alt="News Card Image"
        />
        <div className="card__text-container">
          <p className="card__date">June 23rd 2020</p>
          <h3 className="card__title">Title</h3>
          <p className="card__text">
            asdfkjl;asdlkfja;sldjfkasdfkjl;
            asdlkfja;sldjfkasdfkjl;asdlkfja;sldjfkasdfkjl;asdlkfja;sldjfkasdfkjl
            ;asdlkfja;sldjfkasdfkjl;asdlkfja;sldjfk
          </p>
          <p className="card__author">National Geographic</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
