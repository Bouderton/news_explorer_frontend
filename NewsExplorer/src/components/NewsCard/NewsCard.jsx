import "./NewsCard.css";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const NewsCard = ({
  isSavedNews,
  article,
  loggedIn,
  openPopup,
  handleSaveArticle,
  savedArticle,
}) => {
  // cards accept news data

  const [clicked, setClicked] = useState(false);
  const [visible, setVisibile] = useState(false);
  // const route = useLocation();

  const convertDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  const handleHover = () => {
    setVisibile(true);
  };

  const handleHoverOut = () => {
    setVisibile(false);
  };

  return (
    <>
      {isSavedNews ? (
        <>
          <div className="card__container">
            <button className="card__trashcan" type="button" />
            <div className="card__keyword-container">
              <p className="card__keyword">Keyword</p>
            </div>
            <div className="card">
              {savedArticle.urlToImage && (
                <img
                  className="card__image"
                  src={savedArticle.urlToImage}
                  alt={savedArticle.title}
                />
              )}
              <div className="card__text-container">
                <p className="card__date">
                  {convertDate(savedArticle.publishedAt)}
                </p>
                <h3 className="card__title title_clamp">
                  {savedArticle.title}
                </h3>
                <p className="card__text text_clamp">
                  {savedArticle.description}
                </p>
                <p className="card__author">{savedArticle.source.name}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card__container">
            {loggedIn === true ? (
              <button
                onClick={() => {
                  handleSaveArticle({ article });
                  handleClick();
                }}
                type="radio"
                className={`${
                  clicked ? "card__bookmark-active" : "card__bookmark"
                }`}
              />
            ) : (
              <>
                <button
                  disabled
                  className="card__bookmark-disabled"
                  onMouseOver={handleHover}
                />
                <button
                  onClick={openPopup}
                  onMouseOut={handleHoverOut}
                  type="text"
                  className={`card__signin ${
                    visible === true ? "signin_reveal" : ""
                  }`}
                >
                  Sign in to save articles
                </button>
              </>
            )}
            <div className="card">
              {article.urlToImage && (
                <img
                  className="card__image"
                  src={article.urlToImage}
                  alt={article.title}
                />
              )}
              <div className="card__text-container">
                <p className="card__date">{convertDate(article.publishedAt)}</p>
                <h3 className="card__title title_clamp">{article.title}</h3>
                <p className="card__text text_clamp">{article.description}</p>
                <p className="card__author">{article.source.name}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewsCard;

// <div className="card__container">
//   {isSavedNews ? (
//     <>
//       <button className="card__trashcan" type="button" />
//       <div className="card__keyword-container">
//         <p className="card__keyword">Keyword</p>
//       </div>
//     </>
//   ) : (
//     <>
//       {loggedIn === true ? (
//         <button
//           onClick={() => {
//             handleSaveArticle({ article });
//             handleClick();
//           }}
//           type="radio"
//           className={`${
//             clicked ? "card__bookmark-active" : "card__bookmark"
//           }`}
//         />
//       ) : (
//         <>
//           <button
//             disabled
//             className="card__bookmark-disabled"
//             onMouseOver={handleHover}
//           />
//           <button
//             onClick={openPopup}
//             onMouseOut={handleHoverOut}
//             type="text"
//             className={`card__signin ${
//               visible === true ? "signin_reveal" : ""
//             }`}
//           >
//             Sign in to save articles
//           </button>
//         </>
//       )}
//     </>
//   )}
//   <div className="card">
//     {article.urlToImage && (
//       <img
//         src={article.urlToImage}
//         className="card__image"
//         alt={article.title}
//       />
//     )}

//     <div className="card__text-container">
//       <p className="card__date">{convertDate(article.publishedAt)}</p>
//       <h3 className="card__title title_clamp">{article.title}</h3>
//       <p className="card__text text_clamp">{article.description}</p>
//       <p className="card__author">{article.source.name}</p>
//     </div>
//   </div>
// </div>
