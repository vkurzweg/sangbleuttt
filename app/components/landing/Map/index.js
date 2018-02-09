/**
*
* Map
*
*/

import React from 'react';
// import styled from 'styled-components';
// import WorldMap from 'grommet/components/WorldMap';
import { Image } from 'cloudinary-react';
import ReactHover from 'react-hover';


class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options = {
      followCursor:true,
      shiftX: 20,
      shiftY: 0
    }
    return (
      <div style={{ height: '60vh' }}>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div style={{ position: 'absolute', width: '1em', marginLeft: '47.5vw' }} >
              <span style={{ color: '#3D8EE2', fontSize: '130px' }}>.</span>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div style={{ backgroundColor: '#FFFFFF', textAlign: 'center', width: '20vw', fontSize: '18px' }}>
              <Image style={{ width: '20%', display: 'block', margin: '0 auto', paddingTop: '5%' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
              <h3 style={{ padding: '2%' }}>Sang Bleu London</h3>
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div style={{ position: 'absolute', width: '1em', marginLeft: '49vw', marginTop: '2vh' }} >
              <span style={{ color: '#3D8EE2', fontSize: '130px' }}>.</span>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div style={{ backgroundColor: '#FFFFFF', textAlign: 'center', width: '20vw', fontSize: '18px' }}>
              <Image style={{ width: '15%', display: 'block', margin: '0 auto', paddingTop: '5%' }} cloudName="kurzweg" publicId="logozurich" alt="sang bleu zurich" quality="auto" crop="scale" responsive />
              <h3 style={{ padding: '2%' }}>Sang Bleu Zurich</h3>
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div style={{ position: 'absolute', width: '1em', marginLeft: '26.25vw', marginTop: '7.25vh' }} >
              <span style={{ color: '#3D8EE2', fontSize: '130px' }}>.</span>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div style={{ backgroundColor: '#FFFFFF', textAlign: 'center', width: '20vw', fontSize: '18px' }}>
              <h3 style={{ padding: '2%' }}>Coming Soon:<br />Sang Bleu LA</h3>
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <Image style={{ height: '60vh', width: 'auto', display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId="map3" alt="map of sang bleu locations" quality="auto" crop="scale" responsive />

      </div>
    );
  }
}

Map.propTypes = {

};

export default Map;
