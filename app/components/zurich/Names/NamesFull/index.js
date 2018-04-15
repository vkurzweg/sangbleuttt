/**
*
* NamesFull
*
*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Artist0 from '../Artists/Maxime';
import Artist1 from '../Artists/Giorgio';
import Artist2 from '../Artists/Jordan';
import Artist3 from '../Artists/Paolo';
import Artist4 from '../Artists/Labaz';
import Artist5 from '../Artists/Stephane';
import Artist6 from '../Artists/Diego';
import Artist7 from '../Artists/Golda';
import Artist8 from '../Artists/Marco';
import Artist9 from '../Artists/Matt';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: .5s ${pulseAnimation};
  margin-top: -7vh;
`;

class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '98vw';
    let imageClass = 'hover-container-full';
    const artists = this.props.artists;
    if(artists.length > 0){
    return (
      <PulseDiv>
        <div className="insta-hover row" style={{ margintop: '-5vh', paddingLeft: '20vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto' }}>
          <div className={`${imageClass} + col-sm-5`}>
            <Artist0
              artist0={artists[0]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Artist1
              artist1={artists[1]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="insta-hover row" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist2
              artist2={artists[2]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist3
              artist3={artists[3]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="row insta-hover" style={{ paddingLeft: '20vw', display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist4
              artist4={artists[4]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist5
              artist5={artists[5]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>


        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-5`}>
            <Artist6
              artist6={artists[6]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="col-sm-7"></div>
        <div className="insta-hover row" style={{ paddingLeft: '10vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-4`}>
            <Artist7
              artist7={artists[7]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Artist8
              artist8={artists[8]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Artist9
              artist9={artists[9]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
      </PulseDiv>
    )}
    return (<div />);
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
