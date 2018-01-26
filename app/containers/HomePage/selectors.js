import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Direct selector to the homePage state domain
 */

 // export const selectHomePageDomain = () => (state) => state.get('HomePage');


export const selectArticlesDomain = (state) => state.get('articles');

// const selectHomePage = () => createSelector(
//     selectArticlesDomain(),
//   (substate) => substate.toJS()
// );

export const selectArticles = () =>(
  selectArticlesDomain(),
  (articlesState) => {
    console.log(articlesState)
    const articles = articlesState.get('articles')
    const isFetchingArticles = articlesState.get('isFetchingArticles')
    return {
      articles,
      isFetchingArticles
    }
  }
);

export default selectArticles;
