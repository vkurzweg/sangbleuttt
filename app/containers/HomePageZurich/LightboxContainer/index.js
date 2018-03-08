/**
 *
 * LightboxContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
        <div>
          {console.log('userId: ', this.props.userId)}
        </div>
    );
  }
}

LightboxContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LightboxContainer);

// <div>
//   {this.state.photos.map((photo, key) => {
//     return (
//       <div key={photo.id}>
//         <img src={photo.images.standard_resolution.url} alt={photo.caption}/>
//       </div>
//     )
//   })}
// </div>
