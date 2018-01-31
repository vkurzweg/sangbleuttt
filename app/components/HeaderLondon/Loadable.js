/**
 *
 * Asynchronously loads the component for HeaderLondon
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
