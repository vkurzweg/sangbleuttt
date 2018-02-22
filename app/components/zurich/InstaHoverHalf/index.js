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
    return (
      <div style={{ width: '100%', paddingLeft: '0', paddingRight: '0', marginRight: '0', right: '0', marginLeft: '0', height: '60vh', marginBottom: '0', paddingBottom: '0' }}>


          <table style={{ height: '100%', verticalAlign: 'middle', width: '90%', margin: '0 auto', marginRight: '3vw', marginTop: '-5vh' }}>
            <tr>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half max'>
                          Maxime Plescia-Buchi<br /><span style={{ fontSize: '1vw', marginLeft: '10vw' }}>@mxmttt</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-0" className='hover-image-half'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-0'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='1789183639'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/jordalive/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half jordan'>
                          Jordan Angius<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@jordalive</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-2" className='hover-image-half-right'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-2'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='51624775'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
            </tr>

            <tr>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/paolo_bosson/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half paolo'>
                          Paolo Bosson<br /><span style={{ fontSize: '1vw', marginLeft: '10vh' }}>@paolo_bosson</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-3" className='hover-image-half'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-3'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='378914167'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/zilba.1/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half labaz'>
                          Labaz 1<br /><span style={{ fontSize: '1vw', marginLeft: '3vh' }}>@zilba.1</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-5" className='hover-image-half-right'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-5'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='1529406200'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
            </tr>

            <tr>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/giorgiodeduesanti/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half giorgio'>
                          Giorgio<br /><span style={{ fontSize: '1vw', marginLeft: '5vh' }}>@giorgiodeduesanti</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-1" className='hover-image-half'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-1'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='55968406'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half stephane'>
                          Stephane Devidal<br /><span style={{ fontSize: '1vw', marginLeft: '2vw' }}>@stephane_devidal_tattoo</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-4" className='hover-image-half-right'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-4'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='2179164383'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
            </tr>

            <tr>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/black_arm_tattoo/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half matt'>
                          Matt Powers<br /><span style={{ fontSize: '1vw', marginLeft: '10vh' }}>@black_arm_tattoo</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-6" className='hover-image-half'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-6'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='17337198'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/diagal_faust/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half diego'>
                          Diego Thonney<br /><span style={{ fontSize: '1vw', marginLeft: '10vh' }}>@diagal_faust</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-7" className='hover-image-half-right'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-7'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='1210201419'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
            </tr>

            <tr>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half golda'>
                          Golda Kracks<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@golda.kracks</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-8" className='hover-image-half'>
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
              </td>
              <td>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <div>
                      <a href='https://www.instagram.com/marco_romegialli/' target='_blank' style={{ textDecoration: 'none' }}>
                        <h2 className='hover-name-half marco'>
                          Marco Romegialli<br /><span style={{ fontSize: '1vw', marginLeft: '15vh' }}>@marco_romegialli</span>
                        </h2>
                      </a>
                    </div>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <div id="instafeed-9" className='hover-image-half-right'>
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-liked'
                        target={'instafeed-9'}
                        template="<div class='bg' style='background-image: url({{image}})'></div>"
                        userId='1599024779'
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                    </div>
                  </ReactHover.Hover>
                </ReactHover>
              </td>
            </tr>

          </table>

      </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
