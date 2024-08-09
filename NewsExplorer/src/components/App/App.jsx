import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { UserContext } from "../../contexts/UserContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import SearchForm from "../SearchForm/SearchForm";
import { searchNews } from "../../utils/NewsApi";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [isSavedNews, setIsSavedNews] = useState(false);

  const handleRegisterPopup = () => {
    setActivePopup("register");
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  const handleLoginPopup = () => {
    setActivePopup("login");
  };

  const showMoreArticles = () => {
    setShownArticles((prev) => prev + 3);
  };

  const handleSearchResults = (query) => {
    searchNews(query)
      .then((data) => {
        setSearching(true);
        setTimeout(() => {
          const filteredArticles = data.articles.filter(
            (article) =>
              article.urlToImage &&
              article.title &&
              !article.title.includes("[Removed]")
          );
          setArticles(filteredArticles);
          setIsLoading(false);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!activePopup) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activePopup]);

  return (
    <>
      <UserContext.Provider value={user}>
        <ArticleContext.Provider
          value={{ articles, setArticles, shownArticles, setShownArticles }}
        >
          <div className="page">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      openPopup={handleLoginPopup}
                      handleSubmit={handleSearchResults}
                    />
                    <Main
                      articles={articles}
                      showMoreArticles={showMoreArticles}
                      isLoading={isLoading}
                      searching={searching}
                    />
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <SavedNews
                    loggedIn={true}
                    name={"User"}
                    num={3}
                    openPopup={handleRegisterPopup}
                  />
                }
              />
            </Routes>
            <Footer isSavedNews={isSavedNews} />
            <RegisterPopup
              isOpen={activePopup === "register"}
              closePopup={handleClosePopup}
              handleLoginPopup={handleLoginPopup}
            />
            <LoginPopup
              isOpen={activePopup === "login"}
              closePopup={handleClosePopup}
              handleRegisterPopup={handleRegisterPopup}
            />
          </div>
        </ArticleContext.Provider>
      </UserContext.Provider>
    </>
  );
}

// NOTES AND TODO
// FORM VALIDATION
// USER STATE
// PRAY

export default App;
