/**
 *
 * Asynchronously loads the component for InstaHover
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
