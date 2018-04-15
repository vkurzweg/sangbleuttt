/**
 *
 * Asynchronously loads the component for Maxime
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
