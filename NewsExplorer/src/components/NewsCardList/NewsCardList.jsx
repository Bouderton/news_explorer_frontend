import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = () => {
  // need to pass news data to news cards
  return (
    <div className="card__results">
      <h3 className="card__results-text">Search Results</h3>
      <div className="card__grid-container">
        <div className="card__grid">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default NewsCardList;
