import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_ARTICLES,
  SET_ARTICLE_KEY,
  SET_ARTICLE,
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  } from './constants';

export function fetchArticles() {
  return {
    type: FETCH_ARTICLES,
    payload: true,
  };
}

export function fetchArticlesSuccess(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles,
    payload: false,
  };
}

export function fetchArticlesFailure() {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: false,
  };
}

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    articles
  }
}

export function setArticleKey(key) {
  return {
    type: SET_VENDOR_KEY,
    key,
  };
}

export function fetchArticle() {
  return {
    type: FETCH_ARTICLE,
    payload: true,
  };
}

export function fetchArticleSuccess(article) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    article,
    payload: false,
  };
}

export function fetchArticleFailure() {
  return {
    type: FETCH_ARTICLE_FAILURE,
    payload: false,
  };
}

export function setArticle(article) {
  return {
    type: SET_ARTICLE,
    article
  }
}
