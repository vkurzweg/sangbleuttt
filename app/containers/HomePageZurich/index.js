/**
 *
 * HomePageZurich
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ArticlesContainer from './ArticlesContainer';
import ArticlesContainerInitial from './ArticlesContainerInitial';
import InfoCopy from 'components/zurich/InfoCopy';
import InfoCopyMobile from 'components/zurich/InfoCopyMobile';
import Names from 'components/zurich/Names';
import NamesMobile from 'components/zurich/NamesMobile';
import ArtistsContainer from './ArtistsContainer';
import Icon from 'antd/lib/icon';
import Drawer from 'material-ui/Drawer';
import About from 'components/zurich/About';
import AboutMobile from 'components/zurich/AboutMobile';
import Marquee from 'components/zurich/Marquee';
import MarqueeMobile from 'components/zurich/MarqueeMobile';
import { Image } from 'cloudinary-react';

const Background = styled.div`
  width: calc(100vw - 80px);
  margin: 0 auto;
  &:hover {
    background-color: #EB3331;
  }
`;

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
    height: '100vh',
    overflow: 'visible'
  }
};

export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
     super(props);
     this.state = {
      aboutOpen: false,
      blogOpen: false,
      initial: true,
    };
    this.handleAboutToggle = this.handleAboutToggle.bind(this);
    this.handleBlogToggle = this.handleBlogToggle.bind(this);
    this.handleAboutClose = this.handleAboutClose.bind(this);
    this.handleBlogClose = this.handleBlogClose.bind(this);
    this.handleFirstBlogClick = this.handleFirstBlogClick.bind(this);
    this.handleBlogDismiss = this.handleBlogDismiss.bind(this);
   }

   handleAboutToggle(){
    return this.setState({aboutOpen: !this.state.aboutOpen, initial: false, blogOpen: false})
  }

   handleBlogToggle() {
    return this.setState({blogOpen: !this.state.blogOpen, initial: false, aboutOpen: false})
  }

   handleAboutClose() {
    return this.setState({aboutOpen: false, initial: false})
  }

   handleBlogClose() {
    return this.setState({blogOpen: false, initial: false})
  }

  handleFirstBlogClick() {
    return this.setState({initial: false, blogOpen: true})
  }

  handleBlogDismiss() {
    return this.setState({initial: false});
  }

  render() {
    let contentWidth;
    this.state.aboutOpen ? contentWidth = 'left-half' : contentWidth;
    this.state.blogOpen ? contentWidth = 'right-half' : contentWidth;
    if (this.state.initial) {
      return (
        <div>
          <MediaQuery maxWidth={767}>
            <div style={{ backgroundColor: '#FF001F', position: 'relative', width: '100vw', minHeight: '100%', height: '100%', overflowX: 'hidden', overflowY: 'scroll' }}>
              <div style={{  minHeight: 'calc(100vh - 60px)' }}>
                <div className='about-tab-mobile' onClick={this.handleAboutToggle}>
                  <h4 className='about-label-mobile'>information</h4>
                </div>
                <Drawer
                  open={this.state.aboutOpen}
                  width='90%'
                  containerStyle={style.bg}
                  onTouchTap={this.handleAboutClose}
                >
                  <div>
                    <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                    <AboutMobile />
                  </div>
                </Drawer>
                <div className='blog-tab-mobile'></div>
                <InfoCopyMobile />
                <Image className='zurich-logo-mobile' cloudName="kurzweg" publicId="logozurich" alt="sang bleu zurich" quality="auto" crop="scale" responsive />
                <NamesMobile
                  blogOpen={this.props.blogOpen}
                  aboutOpen={this.props.aboutOpen}
                  initial={this.props.initial}
                />
              </div>
              <MarqueeMobile />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div style={{ height: '100vh', backgroundColor: '#FF001F' }}>
              <div className='initial-container'>
                <Helmet>
                  <title>HomePageZurich</title>
                  <meta name="description" content="Description of HomePageZurich" />
                </Helmet>
                <div className='about-tab' onClick={this.handleAboutToggle}>
                  <div className='about-label-container'>
                    <h4 className='about-label'>information</h4>
                  </div>
                  <Drawer
                    open={this.state.aboutOpen}
                    width='45%'
                    containerStyle={style.bg}
                  >
                    <div>
                      <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                      <About />
                    </div>
                  </Drawer>
                </div>
                <div className='blog-initial'>
                  <div style={{ position: 'relative', height: '100vh', width: '50vw' }}>
                    <h4 onClick={this.handleFirstBlogClick} style={{ marginLeft: '15px', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
                    <Icon type="close" onClick={this.handleBlogDismiss} style={{ float: 'left', color: 'white', fontSize: '2vw', left: '0', marginTop: '5vh', opacity: '.7', paddingLeft: '5%' }} />
                    <div onClick={this.handleFirstBlogClick}>
                      <ArticlesContainerInitial />
                    </div>
                  </div>
                  <Drawer
                    open={this.state.blogOpen}
                    width='45%'
                    containerStyle={style.bg}
                    openSecondary={true}
                  >
                    <div>
                      <h4 style={{ left: '0', marginLeft: '1vw', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
                      <ArticlesContainer />
                    </div>
                  </Drawer>
                </div>
                <div className={contentWidth}>
                  <ArtistsContainer
                    blogOpen={this.state.blogOpen}
                    aboutOpen={this.state.aboutOpen}
                    initial={this.state.initial}
                  />
                </div>
              </div>
              <div style={{ position: 'relative', height: '40px', width: '40px', marginTop: '-40px' }}>
                <Marquee />
                <Image className='swiss-flag' cloudName="kurzweg" publicId="flag" alt="swiss flag" quality="auto" crop="scale" responsive />
              </div>
            </div>
          </MediaQuery>
        </div>
        )} else {
      return (
        <div>
        <MediaQuery maxWidth={767}>
          <div style={{ backgroundColor: '#FF001F', position: 'relative', width: '100vw', minHeight: '100%', height: '100%', overflowX: 'hidden', overflowY: 'scroll' }}>
            <div style={{  minHeight: 'calc(100vh - 60px)' }}>
              <div className='about-tab-mobile' onClick={this.handleAboutToggle}>
                <h4 className='about-label-mobile'>information</h4>
              </div>
              <Drawer
                open={this.state.aboutOpen}
                width='89%'
                containerStyle={style.bg}
                onTouchTap={this.handleAboutClose}
              >
                <div>
                  <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '3.5vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                  <AboutMobile
                  handleAboutClose={this.handleAboutClose}
                  />
                </div>
              </Drawer>
              <div className='blog-tab-mobile'></div>
              <InfoCopyMobile />
              <Image className='zurich-logo-mobile' cloudName="kurzweg" publicId="logozurich" alt="sang bleu zurich" quality="auto" crop="scale" responsive />
              <NamesMobile
                blogOpen={this.props.blogOpen}
                aboutOpen={this.props.aboutOpen}
                initial={this.props.initial}
              />
            </div>
            <MarqueeMobile />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <div style={{ height: '100vh' }}>
            <div style={{ position: 'relative', height: '100vh', backgroundColor: '#FF001F', borderLeft: '40px solid black', borderRight: '40px solid black',  height: '100vh' }}>
              <Helmet>
                <title>HomePageZurich</title>
                <meta name="description" content="Description of HomePageZurich" />
              </Helmet>
              <div className='about-tab' onClick={this.handleAboutToggle}>
                <div className='about-label-container'>
                  <h4 className='about-label'>information</h4>
                </div>
                <Drawer
                  open={this.state.aboutOpen}
                  width='44%'
                  containerStyle={style.bg}
                >
                  <div>
                    <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                    <About />
                  </div>
                </Drawer>
              </div>
              <div className='blog-tab' onClick={this.handleBlogToggle}>
                <div className='blog-label-container'>
                  <h4 className='blog-label'>blog</h4>
                </div>
                <Drawer
                  open={this.state.blogOpen}
                  width='45%'
                  containerStyle={style.bg}
                  openSecondary={true}
                >
                  <div>
                    <h4 style={{ left: '0', marginLeft: '1vw', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
                    <ArticlesContainer />
                  </div>
                </Drawer>
              </div>
              <div className={contentWidth}>
                <ArtistsContainer
                  blogOpen={this.state.blogOpen}
                  aboutOpen={this.state.aboutOpen}
                  initial={this.state.initial}
                />
              </div>
            </div>
            <div style={{ position: 'relative', height: '40px', width: '40px', marginTop: '-40px' }}>
              <Marquee />
              <Image className='swiss-flag' cloudName="kurzweg" publicId="flag" alt="swiss flag" quality="auto" crop="scale" responsive />
            </div>
        </div>
      </MediaQuery>
    </div>
      )}
  }
}

HomePageZurich.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePageZurich);

// <Icon type="caret-right" style={{ marginLeft: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />
// <Icon type="caret-left" style={{ right: '0', marginRight: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />

// <div style={{ position: 'relative', height: '40px', width: '40px' }}>
//   <Marquee />
//   <Image className='swiss-flag' cloudName="kurzweg" publicId="flag" alt="swiss flag" quality="auto" crop="scale" responsive />
// </div>

