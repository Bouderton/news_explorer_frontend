import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ loggedIn, name, num, isSavedNews }) => {
  return (
    <section className="saved">
      <Navigation loggedIn={true} name={name} isSavedNews={true} />
      <div className="saved__text-container">
        <p className="saved__text-subtitle">Saved Articles</p>
        <h2 className="saved__text-title">{`${name}, you have ${num} saved articles`}</h2>
        <p className="saved__text-keywords">
          By keywords:
          <span className="saved__text-span"> word, word, and 2 others</span>
        </p>
      </div>
      <NewsCardList loggedIn={true} isSavedNews={true} />
    </section>
  );
};

export default SavedNews;
