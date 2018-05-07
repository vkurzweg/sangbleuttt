/**
 *
 * Asynchronously loads the component for ArtistsMobile
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
