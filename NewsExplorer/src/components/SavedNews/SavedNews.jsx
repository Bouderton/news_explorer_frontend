import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ isSavedPage, name }) => {
  return (
    <section className="saved-news">
      <Navigation isSavedPage={true} name={name} />
      <h1>TEST</h1>
      <NewsCardList />
    </section>
  );
};

export default SavedNews;
