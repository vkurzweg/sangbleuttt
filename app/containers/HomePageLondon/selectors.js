import { createSelector } from 'reselect';

/**
 * Direct selector to the landingPage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
};
