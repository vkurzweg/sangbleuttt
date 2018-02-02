import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { fetchArticles, fetchArticlesFailure, fetchArticlesSuccess, setArticles } from './actions';
import { selectArticles } from './selectors';
import Prismic from 'prismic-javascript';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'utils/axiosHelpers';
import { store } from 'app';





export function* getArticlesAsync() {
  try {
    console.log('Attempting to get articles');
    // selects parts of redux store
    // const homePage = yield select(selectArticles());
    const articlesState = yield select(selectArticles());
    const apiEndpoint = "https://sangbleu-test.cdn.prismic.io/api";
    const response = yield call(api);
    console.log(response)
    const receivedArticles = response.results;
    // console.log('articles response', receivedArticles);
    yield put(fetchArticlesSuccess(receivedArticles));
  } catch(e) {
    console.log('get articles request failed');
    console.log(e)
    yield put(fetchArticlesFailure());
  }
}

export function* watchFetchArticles() {
  console.log('redux-saga is running listener...');
  yield takeEvery('app/articles/FETCH_ARTICLES', getArticlesAsync);
}

export function* rootSaga() {
  const fetchArticlesWatcher = yield fork(watchFetchArticles);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchArticlesWatcher);
  console.log('canceled article watcher')
}

// All sagas to be loaded
export default [
  rootSaga,
];
