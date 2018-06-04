/**
*
* InstaHover
*
*/

import React from 'react';
// import styled from 'styled-components';


class InstaHover extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('artists', this.props.artists)
    let artists = this.props.artists;
    if(artists.length > 0){
    return (
      <div style={{ width: '80%', margin: '0 auto', paddingTop: '30vh', overflowY: 'scroll', overflowX: 'hidden', height: '100%', paddingBottom: '10vh' }}>
        <h2 onClick={this.props.openLightbox.bind(this, artists[0])} className='name-mobile'>
            {artists[0].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[0].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[1])} className='name-mobile name-right'>
            {artists[1].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[1].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[2])} className='name-mobile'>
          {artists[2].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[2].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[3])} className='name-mobile name-right'>
          {artists[3].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[3].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[4])} className='name-mobile'>
          {artists[4].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[4].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[5])} className='name-mobile name-right'>
          {artists[5].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[5].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[6])} className='name-mobile'>
          {artists[6].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[6].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[7])} className='name-mobile name-right'>
         {artists[7].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[7].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[8])} className='name-mobile'>
          {artists[8].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[8].data.handle[0].text}</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, artists[9])} className='name-mobile name-right'>
          {artists[9].data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>{artists[9].data.handle[0].text}</span>
        </h2>
    </div>
    )}
    return ( <div></div>);
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
