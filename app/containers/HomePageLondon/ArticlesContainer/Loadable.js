/**
 *
 * Asynchronously loads the component for ArticlesContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
