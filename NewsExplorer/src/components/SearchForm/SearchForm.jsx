import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";
import { useState, useEffect } from "react";
import { searchNews } from "../../utils/NewsApi";
import Preloader from "../Preloader/Preloader";

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (!query) {
      alert("Please enter a keyword");
    }

    handleSubmit(query);
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
          <form className="search__form" onSubmit={handleSearch}>
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
