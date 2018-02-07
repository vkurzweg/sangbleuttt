/**
*
* InstaHover
*
*/

import React from 'react';
// import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';


const artists1 = [
  {
      name: 'Maxime Plescia-Buchi',
      userId: '1789183639',
      link: 'https://www.instagram.com/mxmttt/'
    }, {
      name: 'Giorgio',
      userId: '55968406',
      link: 'https://www.instagram.com/giorgiodeduesanti/'
    }, {
      name: 'Jordan Angius',
      userId: '51624775',
      link: 'https://www.instagram.com/jordalive/?hl=en'
    } ]

const artists2 = [
    {
      name: 'Paolo Bosson',
      userId: '378914167',
      link: 'https://www.instagram.com/paolo_bosson/?hl=en'
    }, {
      name: 'Stephane Devidal',
      userId: '2179164383',
      link: 'https://www.instagram.com/stephane_devidal_tattoo/?hl=en'
    }, {
      name: 'Labaz 1',
      userId: '1529406200',
      link: 'https://www.instagram.com/zilba.1/'
    } ]

const artists3 = [
 {
     name: 'Matt Powers',
     userId: '17337198',
     link: 'https://www.instagram.com/black_arm_tattoo/'
   }, {
     name: 'Diego Thonney',
     userId: '1210201419',
     link: 'https://www.instagram.com/diagal_faust/'
   }, {
     name: 'Golda Kracks',
     userId: '2268101836',
     link: 'https://www.instagram.com/golda.kracks/'
   }, {
     name: 'Marco Romegialli',
     userId: '1599024779',
     link: 'https://www.instagram.com/marco_romegialli/'
   }]


class InstaHover extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  const options = {
    followCursor:true,
    shiftX: 20,
    shiftY: 0
  }
    return (
      <div>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginLeft: '15%' }}>Maxime Plescia-Buchi</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-0" style={{ marginLeft: '-40%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-0'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='1789183639'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '15%' }}>Giorgio</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-1" style={{ marginLeft: '-40%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-1'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='55968406'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '25%', marginLeft: '5%' }}>Jordan Angius</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-2" style={{ marginLeft: '-40%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-2'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='51624775'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '35%', marginLeft: '30%' }}>Paolo Bosson</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-3" style={{ marginLeft: '-40%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-3'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='378914167'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '10%', marginLeft: '50%' }}>Stephane Devidal</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-4" style={{ width: '30vw', marginLeft: '-100%', marginTop: '-10%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-4'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='2179164383'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '15%', marginLeft: '20%' }}>Labaz 1</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-5" style={{ marginLeft: '-60%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-5'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='1529406200'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>


        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '54%', marginLeft: '45%' }}>Matt Powers</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-6" style={{ width: '30vw', marginLeft: '-100%', marginTop: '-80%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-6'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='17337198'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '60%', marginLeft: '15%' }}>Diego Thonney</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-7" style={{ width: '30vw', marginLeft: '-100%', marginTop: '-80%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-7'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='1210201419'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '45%', marginLeft: '5%' }}>Golda Kracks</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-8" style={{ width: '30vw', marginLeft: '-100%', marginTop: '-80%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-8'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='2268101836'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className='hover-name' style={{ marginTop: '20%', marginLeft: '45%' }}>Marco Romegialli</h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-9" style={{ width: '30vw', marginLeft: '-100%', marginTop: '-80%' }}>
              <Instafeed
                limit='2'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-9'}
                template="<img class='hover-item' src='{{image}}' />"
                userId='1599024779'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>

      </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
