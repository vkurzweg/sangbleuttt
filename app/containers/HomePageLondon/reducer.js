import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
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

  const articlesInitialState = fromJS({
    articles: [],
    key: 0,
    isFetchingArticles: false,
    isFetchingArticle: false,
  })

  function articlesReducer(state = articlesInitialState, action) {
    switch (action.type) {
      case SET_ARTICLES:
        return state.set('articles', action.articles);
      case SET_ARTICLE_KEY:
        return state.set('key', action.key);
      case FETCH_ARTICLES:
        return state.set('isFetchingArticles', fromJS(action.payload));
      case FETCH_ARTICLES_SUCCESS:
        return state.set('articles', action.articles)
                    .set('isFetchingArticles', fromJS(action.payload));
      case FETCH_ARTICLES_FAILURE:
        return state.set('isFetchingArticles', fromJS(action.payload));
      case SET_ARTICLE:
        return state.set('currentArticle', action.article);
      case FETCH_ARTICLE:
        return state.set('isFetchingArticle', action.payload);
      case FETCH_ARTICLE_SUCCESS:
        return state.set('isFetchingArticle', action.payload);
      case FETCH_ARTICLE_FAILURE:
        return state.set('isFetchingArticle', action.payload);
      default:
        return state;
    }
  }

  export default articlesReducer;
