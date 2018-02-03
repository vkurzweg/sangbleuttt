/**
 *
 * Asynchronously loads the component for LondonLanding
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
