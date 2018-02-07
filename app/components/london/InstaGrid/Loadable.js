/**
 *
 * Asynchronously loads the component for InstaGrid
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
