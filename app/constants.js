
export const FETCH_ARTICLES = 'app/articles/FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'app/articles/FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'app/articles/FETCH_ARTICLES_FAILURE';
export const SET_ARTICLES = 'app/articles/SET_ARTICLES';
export const SET_ARTICLE_KEY = 'app/articles/SET_ARTICLE_KEY';

export const FETCH_ARTICLE = 'app/articles/FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'app/articles/FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'app/articles/FETCH_ARTICLE_FAILURE';
export const SET_ARTICLE = 'app/articles/SET_ARTICLE';

export const linkResolver = (doc, ctx) => {
    return '/';
};
