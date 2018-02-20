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
    followCursor:false,
  }
  let random1= (Math.floor(Math.random()*100) + 1) + "vw"
  let random2= (Math.floor(Math.random()*100) + 1) + "vh"
    return (
      <div className='insta-hover' style={{ zIndex: '5', marginLeft: '50vh', marginTop: '-75vh', height: '95vh' }}>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name max' style={{ fontFamily: 'SangBleu', marginLeft: '65vh', marginTop: '-5vh' }}>
                  Maxime Plescia-Buchi<br /><span style={{ fontSize: '20px', marginLeft: '31vh' }}>@mxmttt</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-0" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/giorgiodeduesanti/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name giorgio' style={{ marginLeft: '-45vh', marginTop: '10vh' }} >
                  Giorgio<br /><span style={{ fontSize: '20px', marginLeft: '9vh' }}>@giorgiodeduesanti</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-1" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/jordalive/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name jordan' style={{ fontFamily: 'SangBleu', marginTop: '30vh', marginLeft: '80vh' }}>
                  Jordan Angius<br /><span style={{ fontSize: '20px', marginLeft: '19vh' }}>@jordalive</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-2" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/paolo_bosson/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name paolo' style={{ fontFamily: 'SangBleu', marginTop: '50vh', marginLeft: '20vh' }}>
                  Paolo Bosson<br /><span style={{ fontSize: '20px', marginLeft: '19vh' }}>@paolo_bosson</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-3" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name stephane' style={{ fontFamily: 'SangBleu', marginTop: '30vh', marginLeft: '-25vw' }}>
                  Stephane Devidal<br /><span style={{ fontSize: '20px', marginLeft: '19vh' }}>@stephane_devidal_tattoo</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-4" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/zilba.1/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name labaz' style={{ fontFamily: 'SangBleu', marginTop: '10vh', marginLeft: '5vw' }}>
                  Labaz 1<br /><span style={{ fontSize: '20px', marginLeft: '9vh' }}>@zilba.1</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-5" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/black_arm_tattoo/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name matt' style={{ marginTop: '30vh', marginLeft: '24vh' }}>
                  Matt Powers<br /><span style={{ fontSize: '20px', marginLeft: '19vh' }}>@black_arm_tattoo</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-6" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/diagal_faust/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name diego' style={{ marginTop: '50vh', marginLeft: '-45vh' }}>
                  Diego Thonney<br /><span style={{ fontSize: '20px', marginLeft: '25vh' }}>@diagal_faust</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-7" className='hover-image'>
              <Instafeed
                limit='1'
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
              <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name golda' style={{ marginTop: '50vh', marginLeft: '78vh' }}>
                  Golda Kracks<br /><span style={{ fontSize: '20px', marginLeft: '19vh' }}>@golda.kracks</span>
                </h2>
              </a>
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
              <a href='https://www.instagram.com/marco_romegialli/' target='_blank' style={{ textDecoration: 'none' }}>
                <h2 className='hover-name marco' style={{ marginLeft: '50vh', marginTop: '10vh' }}>
                  Marco Romegialli<br /><span style={{ fontSize: '20px', marginLeft: '25vh' }}>@marco_romegialli</span>
                </h2>
              </a>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-9" className='hover-image'>
              <Instafeed
                limit='1'
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
