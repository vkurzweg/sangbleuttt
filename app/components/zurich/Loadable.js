/**
 *
 * Asynchronously loads the component for Zurich
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
