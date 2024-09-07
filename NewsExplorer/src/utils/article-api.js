import { checkResponse } from "./NewsApi";

const baseUrl = "http://localhost:3001";

export const saveArticle = ({ article }, token) => {
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: article.title,
      description: article.description,
      imageUrl: article.urlToImage,
      date: article.publishedAt,
      keyword: "Real",
      author: article.source.name,
    }),
  }).then(checkResponse);
};

export const unsaveArticle = (_id, token) => {
  return fetch(`${baseUrl}/articles/${_id}`, {
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
