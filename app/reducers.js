/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
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

import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

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

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    articles: articlesReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });
}
