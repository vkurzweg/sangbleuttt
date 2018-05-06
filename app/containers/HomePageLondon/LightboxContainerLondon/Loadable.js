/**
 *
 * Asynchronously loads the component for LightboxContainerLondon
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
