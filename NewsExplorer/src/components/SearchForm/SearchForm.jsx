import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";
import { useState, useEffect } from "react";
import { searchNews } from "../../utils/NewsApi";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      alert("please enter a keyword");
    }

    searchNews(query)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("BOOOOO");
      });
    setQuery("");
  }

  return (
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
  );
};

export default SearchForm;
