import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";
import { useState, useEffect } from "react";
import { searchNews } from "../../utils/NewsApi";
import Preloader from "../Preloader/Preloader";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  // const handleSearchResults = ({
  //   title,
  //   urlToImage,
  //   description,
  //   publishedAt,
  // }) => {
  //   searchNews({ title, urlToImage, description, publishedAt })
  //     .then((item) => {
  //       setArticles([item, ...articles]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      alert("please enter a keyword");
    }

    searchNews(query)
      .then((res) => {
        console.log("Query Submitted");
      })
      .catch((err) => {
        console.log(err);
        alert("NOPE");
      });
    setQuery("");
  }

  return (
    <>
      <div className="search">
        <div className="search__text-container">
          <h1 className="search__title">What's going on in the world?</h1>
          <p className="search__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <div className="search__form-container">
          <form className="search__form" onSubmit={handleSubmit}>
            <fieldset className="search__form-fieldset">
              <input
                placeholder="Enter topic"
                required
                value={query}
                className="search__form-input"
                onChange={handleQueryChange}
              />
              <button type="submit" className="search__submit-button">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
