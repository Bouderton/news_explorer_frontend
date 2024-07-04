import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = () => {
  // need to pass news data to news cards
  return (
    <div className="card__results">
      <h3 className="card__results-text">Search Results</h3>
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
