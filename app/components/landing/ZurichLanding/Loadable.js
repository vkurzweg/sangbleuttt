/**
 *
 * Asynchronously loads the component for ZurichLanding
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
