// React
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import EditProfilePopup from "../EditPopup/EditPopup";
import SuccessPopup from "../SuccessPopup/SuccessPopup";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// API
import { searchNews, saveArticle } from "../../utils/NewsApi";
import { authorize, checkToken } from "../../utils/auth";

// Context
import { UserContext } from "../../contexts/UserContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import { SavedArticleContext } from "../../contexts/SavedArticleContext";

function App() {
  // State Variables
  const [activePopup, setActivePopup] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [isSavedNews, setIsSavedNews] = useState(false);
  const [error, setError] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  // Popups

  const handleRegisterPopup = () => {
    setActivePopup("register");
  };

  const handleEditPopup = () => {
    setActivePopup("edit");
  };

  const handleSuccessPopup = () => {
    setActivePopup("success");
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

  // Articles

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
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      });
  };

  const handleSaveArticle = (article) => {
    console.log("SAVED: ", article);
    // For saving articles after DB is created
    // saveArticle({ article })
    //   .then((savedArticles) => {
    //     console.log("Inside: ", savedArticles);
    //     setSavedArticles((prevArticles) => [...prevArticles, savedArticles]);
    //   })
    //   .catch((err) => console.log(err));
  };

  // User Functions

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

  // useEffects

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
          <SavedArticleContext.Provider
            value={{ savedArticles, setSavedArticles }}
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
                        loggedIn={loggedIn}
                        error={error}
                        openPopup={handleLoginPopup}
                        handleSaveArticle={handleSaveArticle}
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
                        handleLogout={handleLogout}
                        openPopup={handleRegisterPopup}
                        savedArticles={savedArticles}
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
                handleSuccessPopup={handleSuccessPopup}
              />
              <LoginPopup
                isOpen={activePopup === "login"}
                closePopup={handleClosePopup}
                handleRegisterPopup={handleRegisterPopup}
                handleLogin={handleLogin}
              />
              <SuccessPopup
                isOpen={activePopup === "success"}
                closePopup={handleClosePopup}
                handleLoginPopup={handleLoginPopup}
              />
              <EditProfilePopup
                isOpen={activePopup === "edit"}
                handleEditPopup={handleEditPopup}
                closePopup={handleClosePopup}
              />
            </div>
          </SavedArticleContext.Provider>
        </ArticleContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
