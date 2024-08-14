import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCardList from "../NewsCardList/NewsCardList";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";

const SavedNews = ({ loggedIn, num, isSavedNews, openPopup }) => {
  const currentUser = useContext(UserContext);

  return (
    <section className="saved">
      <Navigation
        loggedIn={loggedIn}
        isSavedNews={isSavedNews}
        openPopup={openPopup}
      />
      <div className="saved__text-container">
        <p className="saved__text-subtitle">Saved Articles</p>
        <h2 className="saved__text-title">{`${currentUser?.data.name}, you have ${num} saved articles`}</h2>
        <p className="saved__text-keywords">
          By keywords:
          <span className="saved__text-span">
            {" "}
            word, word, words and 2 others
          </span>
        </p>
      </div>
      <NewsCardList loggedIn={loggedIn} isSavedNews={true} />
    </section>
  );
};

export default SavedNews;
