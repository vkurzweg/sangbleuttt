/**
*
* Maxime
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';

const Button = styled.div`
  background-color: transparent;
  border: none;
  outline: 0;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;

class Maxime extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options = {
      followCursor:false,
    }
    const artist = this.props.artist0;
    const Background = artist.data.image.url
    return (
      <Button onClick={this.props.openLightbox.bind(this, artist)}>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div className='name-container'>
              <h2 className="hover-name max">
                {artist.data.name[0].text}<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', marginLeft: '6vw', textTransform: 'uppercase' }}>{artist.data.handle[0].text}</span>
              </h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-0" className='hover-image'>
              <div className='bg' style={{ backgroundImage: `url(${Background})` }}></div>
            </div>
          </ReactHover.Hover>
        </ReactHover>
      </Button>
    );
  }
}

Maxime.propTypes = {

};

export default Maxime;

// <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>

