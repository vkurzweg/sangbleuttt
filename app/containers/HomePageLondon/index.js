/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { StickyContainer, Sticky } from 'react-sticky';
import { Helmet } from 'react-helmet';
import InfoCopy from 'components/london/InfoCopy';
import InfoCopyMobile from 'components/london/InfoCopyMobile';
import Nav from 'components/london/Nav';
import NavMobile from 'components/london/NavMobile';
import About from 'components/london/About';
import AboutMobile from 'components/london/AboutMobile';
import Insta from 'components/london/Insta';
import InstaMobile from 'components/london/InstaMobile';
import BlogContainer from './BlogContainer';
import BlogContainerRefactor from './BlogContainerRefactor';
import BlogContainerMobile from './BlogContainerMobile';

const Heading = styled.h3`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 23pt;
  letter-spacing: .16px;
  margin-left: 4vw;
  padding-top: 1vw;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover, &:active, &:visited {
    color: black;
  }
`;

const HeadingMobile = styled.h3`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 5vw;
  letter-spacing: .16px;
  margin-left: 4vw;
  padding-top: 5vw;

`;

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
        <Helmet>
          <title>Sang Bleu London</title>
          <meta name="description" content="Artist portfolios and news from the Sang Bleu tattoo studio in London." />
        </Helmet>
        <MediaQuery minWidth={768}>
          <StickyContainer>
            <Nav />
            <InfoCopy />
            <Insta />
            <Sticky>
              <A href="#about"><Heading>about</Heading></A>
            </Sticky>
            <About />
            <Sticky>
              <div style={{ paddingTop: '4vh' }}>
                <A href="#blog"><Heading>Blog</Heading></A>
              </div>
            </Sticky>
            <BlogContainer />
          </StickyContainer>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div>
            <StickyContainer>
              <NavMobile />
              <InfoCopyMobile />
              <InstaMobile />
              <Sticky>
                <HeadingMobile>about</HeadingMobile>
              </Sticky>
              <AboutMobile />
            </StickyContainer>
            <StickyContainer>
              <Sticky>
                <HeadingMobile>blog</HeadingMobile>
              </Sticky>
              <BlogContainerMobile />
            </StickyContainer>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}


export default connect(null, mapDispatchToProps)(HomePage);

// <StickyContainer style={{ height: '100px' }}>
//   <Sticky
//     >
//     {({
//       isSticky,
//       distanceFromTop,
//       calculatedHeight
//     }) => {
//       console.log({
//         isSticky,
//       });
//       return <Heading>about</Heading>;
//     }}
//   </Sticky>
// </StickyContainer>
