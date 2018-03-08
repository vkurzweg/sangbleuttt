/**
*
* Maxime
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: 0;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;

class Golda extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    return (
      <Button onClick={this.props.openLightbox.bind(this, '2268101836')}>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className="hover-name golda">
                Golda Kracks<br /><span style={{ fontSize: '.7vw', marginLeft: '6vw', textTransform: 'uppercase' }}>@golda.kracks</span>
              </h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-8" className='hover-image'>
              <Instafeed
                limit='1'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-8'}
                template="<div class='bg' style='background-image: url({{image}})'></div>"
                userId='2268101836'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>
      </Button>
    );
  }
}

Golda.propTypes = {

};

export default Golda;

// <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>

