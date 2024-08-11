// React
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// API
import { searchNews, saveArticle } from "../../utils/NewsApi";
import { authorize, checkToken } from "../../utils/auth";

// Context
import { UserContext } from "../../contexts/UserContext";
import { ArticleContext } from "../../contexts/ArticleContext";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [isSavedNews, setIsSavedNews] = useState(false);
  const [error, setError] = useState(null);
  // const [token, setToken] = useState(null);

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
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      });
  };

  const handleLogin = () => {
    authorize("user@example.com", "password")
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setUser(res.data);
        setLoggedIn(true);
        handleClosePopup();
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("jwt");
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <>
      <UserContext.Provider value={user}>
        <ArticleContext.Provider
          value={{ articles, setArticles, shownArticles, setShownArticles }}
        >
          <div className="page">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Header
                      openPopup={handleLoginPopup}
                      handleSubmit={handleSearchResults}
                      loggedIn={loggedIn}
                      handleLogout={handleLogout}
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
                  <ProtectedRoute loggedIn={loggedIn}>
                    <SavedNews
                      loggedIn={loggedIn}
                      isSavedNews={true}
                      num={3}
                      openPopup={handleRegisterPopup}
                    />
                  </ProtectedRoute>
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
              handleLogin={handleLogin}
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
