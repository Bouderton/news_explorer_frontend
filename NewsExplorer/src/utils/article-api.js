import { checkResponse } from "./NewsApi";

const baseUrl = "http://localhost:3001";

export const saveArticle = ({ article }, token) => {
  const convertDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formattedDate = convertDate(article.publishedAt);

  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      date: formattedDate,
      keyword: "Real",
      author: article.source.name,
      url: article.url,
    }),
  }).then(checkResponse);
};

export const unsaveArticle = (id, token) => {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const getArticles = () => {
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
