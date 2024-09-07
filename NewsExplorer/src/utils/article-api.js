import baseUrl from "./auth";
import { checkResponse } from "./NewsApi";

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
      imageUrl: article.imageUrl,
      date: article.publishedAt,
      keyword: article.title,
      author: article.author,
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
