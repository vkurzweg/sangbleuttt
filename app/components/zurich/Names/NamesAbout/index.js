/**
*
* NamesFull
*
*/

import React from 'react';
// import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';


class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '40vw';
    let imageClass = 'hover-container-about';
    let fontShrink = 'font-shrink';
    return (
      <div>
        <div className="insta-hover row" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginLeft: '-2vw', paddingTop: '2vh' }}>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div className='name-container' style={{ marginTop: '-2vh', marginLeft: '3vw' }}>
                  <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name max`}>
                      Maxime Plescia-Buchi<br /><span style={{ fontSize: '1vw', marginLeft: '10vw' }}>@mxmttt</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='1789183639'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginBottom: '7vh' }}>
                  <a href='https://www.instagram.com/giorgiodeduesanti/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name giorgio`}>
                      Giorgio<br /><span style={{ fontSize: '1vw', marginLeft: '5vh' }}>@giorgiodeduesanti</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='55968406'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div>
                  <a href='https://www.instagram.com/jordalive/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name jordan`}>
                      Jordan Angius<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@jordalive</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='51624775'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
        </div>

        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '10vh' }}>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginTop: '-7vh', marginLeft: '1vw' }}>
                  <a href='https://www.instagram.com/paolo_bosson/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name paolo`}>
                      Paolo Bosson<br /><span style={{ fontSize: '1vw', marginLeft: '10vh' }}>@paolo_bosson</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='378914167'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginLeft: '2vw', marginBottom: '-2vh' }}>
                  <a href='https://www.instagram.com/zilba.1/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name labaz`}>
                      Labaz 1<br /><span style={{ fontSize: '1vw', marginLeft: '3vh' }}>@zilba.1</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='1529406200'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginTop: '-5vh', marginLeft: '-5vw' }}>
                  <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name stephane`}>
                      Stephane Devidal<br /><span style={{ fontSize: '1vw', marginLeft: '2vw' }}>@stephane_devidal_tattoo</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='2179164383'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
        </div>


        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '10vh' }}>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginTop: '-5vh' }}>
                  <a href='https://www.instagram.com/diagal_faust/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name diego`}>
                      Diego Thonney<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@diagal_faust</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='1210201419'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div>
                  <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name golda`}>
                      Golda Kracks<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@golda.kracks</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='2268101836'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginTop: '-7vh', marginLeft: '-5vw' }}>
                  <a href='https://www.instagram.com/marco_romegialli/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name marco`}>
                      Marco Romegialli<br /><span style={{ fontSize: '1vw', marginLeft: '9vh' }}>@marco_romegialli</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='1599024779'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
        </div>
        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '5vh' }}>
          <div className={imageClass}>
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div style={{ marginLeft: '10vw' }}>
                  <a href='https://www.instagram.com/black_arm_tattoo/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className={`${fontShrink} + hover-name matt`}>
                      Matt Powers<br /><span style={{ fontSize: '1vw', marginLeft: '8vh' }}>@black_arm_tattoo</span>
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
                    template="<div class='bg' style='background-image: url({{image}})'></div>"
                    userId='17337198'
                    clientId='da06fb6699f1497bb0d5d4234a50da75'
                    accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                </div>
              </ReactHover.Hover>
            </ReactHover>
        </div>
        </div>
      </div>
    );
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
