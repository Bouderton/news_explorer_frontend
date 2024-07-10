import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchForm.css";
import { useState, useEffect } from "react";

const SearchForm = () => {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
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
              className="search__form-input"
              onChange={handleTextChange}
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
