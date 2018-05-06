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
import Prismic from 'prismic-javascript';
import InfoCopy from 'components/london/InfoCopy';
import InfoCopyMobile from 'components/london/InfoCopyMobile';
import Nav from 'components/london/Nav';
import NavMobile from 'components/london/NavMobile';
import About from 'components/london/About';
import AboutMobile from 'components/london/AboutMobile';
import Insta from 'components/london/Insta';
import ArtistsGrid from 'components/london/ArtistsGrid';
import Artists from 'components/london/Artists';
import InstaMobile from 'components/london/InstaMobile';
import ArtistsGridMobile from 'components/london/ArtistsGridMobile';
import BlogContainer from './BlogContainer';
import BlogContainerRefactor from './BlogContainerRefactor';
import BlogContainerMobile from './BlogContainerMobile';

const Heading = styled.h3`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 23px;
  line-height: 30px;
  letter-spacing: .16px;
  display: inline;
  float: left;
  padding-left: 4vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
  z-index: 3000 !important;
  position: relative;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  position: absolute;
  z-index: 3000;
  &:hover, &:active, &:visited {
    color: black;
  }
`;

const AMobile = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  &:hover, &:active, &:visited {
    color: black;
  }
`;

const HeadingMobile = styled.h3`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: .16px;
  margin-left: 4vw;
  padding-top: 2.7vh;
  color: black;
`;

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      aboutCopy: null,
    }
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'about_section'),).then((response) => {
      console.log('Documents: ', response.results);
      const aboutCopy = response.results;
      return this.setState({ aboutCopy: aboutCopy });
    }));
  }

  render() {
    if (this.state.aboutCopy){
    const about = this.state.aboutCopy[0].data.about_section.about.value[0].text
    console.log('about', about)
    return (
      <div id="top" style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
        <Helmet>
          <title>Sang Bleu London</title>
          <meta name="description" content="Artist portfolios and news from the Sang Bleu tattoo studio in London." />
        </Helmet>
        <MediaQuery minWidth={1025}>
          <StickyContainer>
            <Nav />
            <InfoCopy />
            <Artists />
            <A href="#about_section"><Sticky style={{ position: 'absolute' }}>
              <Heading>about</Heading>
            </Sticky></A>
            <About
              about={about}
            />
            <A href="#blog"><Sticky>
              <div style={{ marginTop: '3vh', position: 'absolute' }}>
                <Heading>Blog</Heading>
              </div>
            </Sticky></A>
            <BlogContainer />
          </StickyContainer>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
          <div>
            <StickyContainer>
              <NavMobile />
              <InfoCopyMobile />
              <ArtistsGridMobile />
              <AMobile href="#about_section"><Sticky>
                <HeadingMobile>about</HeadingMobile>
              </Sticky></AMobile>
              <AboutMobile
                about={about}
              />
            </StickyContainer>
            <StickyContainer>
              <div style={{ marginTop: '-5vh' }}>
              <AMobile href="#blog"><Sticky>
                <HeadingMobile>blog</HeadingMobile>
              </Sticky></AMobile>
              </div>
              <BlogContainerMobile />
            </StickyContainer>
          </div>
        </MediaQuery>
      </div>
    );
  }
    return (
      <div />
      )
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
