/**
 *
 * Asynchronously loads the component for HomePageZurich
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
