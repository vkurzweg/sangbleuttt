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
import ArticlesContainerMobile from './ArticlesContainerMobile';
import ArticlesContainerInitial from './ArticlesContainerInitial';
import InfoCopy from 'components/zurich/InfoCopy';
import InfoCopyMobile from 'components/zurich/InfoCopyMobile';
import Names from 'components/zurich/Names';
import NamesMobile from 'components/zurich/NamesMobile';
import ArtistsContainer from './ArtistsContainer';
import ArtistsContainerMobile from './ArtistsContainerMobile';
import Icon from 'antd/lib/icon';
import Drawer from 'material-ui/Drawer';
import About from 'components/zurich/About';
import AboutMobile from 'components/zurich/AboutMobile';
import Marquee from 'components/zurich/Marquee';
import MarqueeMobile from 'components/zurich/MarqueeMobile';
import { Image } from 'cloudinary-react';
import Prismic from 'prismic-javascript';
import { StickyContainer, Sticky } from 'react-sticky';


const Background = styled.div`
  width: calc(100vw - 60px);
  margin: 0 auto;
`;

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
    height: '100vh',
    overflow: 'visible'
  }
};

const AboutLabel = styled.h4`
  right: 0;
  margin-right: 1vw;
  margin-top: 40vh;
  font-size: 19px;
  letter-spacing: 2.36px;
  z-index: 100;
  position: absolute;
  color: #FFFFFF;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-transform: uppercase;
  text-align: center;
  font-family: SuisseCond;
`;

export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      aboutOpen: false,
      blogOpen: false,
      initial: true,
      viewPost: false,
      postId: '',
      currentPost: null,
      isPanelShowing: false,
      aboutSection: null,
    };
    this.handleAboutToggle = this.handleAboutToggle.bind(this);
    this.handleBlogToggle = this.handleBlogToggle.bind(this);
    this.handleAboutClose = this.handleAboutClose.bind(this);
    this.handleBlogClose = this.handleBlogClose.bind(this);
    this.handleFirstBlogClick = this.handleFirstBlogClick.bind(this);
    this.handleBlogDismiss = this.handleBlogDismiss.bind(this);
    this.handleViewPost = this.handleViewPost.bind(this);
    this.handleDismissPost = this.handleDismissPost.bind(this);
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'about_section'),).then((response) => {
      console.log('Documents: ', response.results);
      const aboutSection = response.results;
      return this.setState({ aboutSection: aboutSection });
    }));
  }


  handleAboutToggle() {
    return this.setState({ aboutOpen: !this.state.aboutOpen, initial: false, blogOpen: false });
  }

  handleBlogToggle() {
    return this.setState({ blogOpen: !this.state.blogOpen, initial: false, aboutOpen: false });
  }

  handleAboutClose() {
    return this.setState({ aboutOpen: false, initial: false });
  }

  handleBlogClose() {
    console.log('clicked')
    return this.setState({ blogOpen: false, initial: false });
  }

  handleFirstBlogClick() {
    return this.setState({ initial: false, blogOpen: true });
  }

  handleBlogDismiss() {
    return this.setState({ initial: false });
  }

  handlePanelToggle() {
    return this.setState({ isPanelShowing: !this.state.isPanelShowing });
  }

  handleViewPost(postId) {
    console.log('clicked')
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.id', postId),).then((response) => {
      console.log('Post: ', response.results[0]);
      const document = response.results;
      return this.setState({
        currentPost: document, postId, viewPost: true, blogOpen: false
      });
    }));
  }

  handleDismissPost() {
    console.log('blog', this.state.blogOpen)
    return this.setState({ viewPost: false, blogOpen: true });
  }

  render() {
    let contentWidth;
    this.state.aboutOpen ? contentWidth = 'left-half' : contentWidth;
    this.state.blogOpen ? contentWidth = 'right-half' : contentWidth;
    let displayPanel;
    this.state.isPanelShowing ? displayPanel = 'block' : displayPanel = 'none';
    let displayMarquee;
    this.state.isPanelShowing ? displayMarquee = 'none' : displayMarquee = 'block';
    if (this.state.aboutSection) {
    let about = this.state.aboutSection[0].data.about_section.about.value[0].text;
    if (this.state.initial && about) {
      return (
        <div>
          <Helmet>
            <title>Sang Bleu Zurich</title>
            <meta name="description" content="Artist portfolios, news, and upcoming events at the Sang Bleu tattoo studio in Zurich, Switzerland." />
          </Helmet>
          <MediaQuery maxWidth={767}>
            <div
              style={{
                backgroundColor: '#FF001F', position: 'relative', width: '100vw', overflowX: 'hidden', overflowY: 'scroll', height: '100vh'
              }}
            >
                <div className="about-tab-mobile" onClick={this.handleAboutToggle}>
                  <h4 className="about-label-mobile">information</h4>
                </div>
                <Drawer
                  open={this.state.aboutOpen}
                  width="91%"
                  containerStyle={style.bg}
                  onTouchTap={this.handleAboutClose}
                >
                  <div style={{ height: '100%', overflowY: 'scroll' }}>
                    <h4 className="about-label">information</h4>
                    <AboutMobile
                      handleAboutClose={this.handleAboutClose}
                      about={about}
                    />
                  </div>
                </Drawer>
                <div className="blog-tab-mobile" onClick={this.handleBlogToggle}>
                  <div className="blog-label-container">
                    <h4 className="blog-label-mobile">blog</h4>
                  </div>
                </div>
                <ArticlesContainerMobile
                  handleViewPost={this.handleViewPost}
                  handleDismissPost={this.handleDismissPost}
                  viewPost={this.state.viewPost}
                  blogOpen={this.state.blogOpen}
                  postId={this.state.postId}
                  currentPost={this.state.currentPost}
                  handleBlogToggle={this.handleBlogToggle}
                  handleBlogClose={this.handleBlogClose}
                />
                <InfoCopyMobile />
                <ArtistsContainerMobile />
                <div onClick={this.handlePanelToggle} style={{ position: 'fixed', bottom: '0', zIndex: '2000' }}>
                  <div style={{ display: displayMarquee }}>
                    <MarqueeMobile />
                    <img className="swiss-flag" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="swiss flag" />
                  </div>
                  <div style={{ position: 'relative', display: displayPanel, backgroundColor: 'black', color: 'white', height: '50vh', width: '100vw' }}>
                    <div style={{ position: 'absolute', left: '0', width: '30px', height: '100%', backgroundColor: '#FF001F' }}><Icon type="close" style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', paddingTop: '5px' }} /></div>
                    <a href="mailto:zurich@sangbleu.tattoo" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><p className="marquee-mailto-mobile">book now — zurich@sangbleu.tattoo</p></a>
                  </div>
                </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div style={{ height: '100vh', backgroundColor: '#FF001F', overflow: 'hidden' }}>
              <div className="initial-container">
                <div className="about-tab" onClick={this.handleAboutToggle}>
                  <div className="about-label-container">
                    <h4 className="about-label">information</h4>
                  </div>
                  <Drawer
                    open={this.state.aboutOpen}
                    width="45%"
                    containerStyle={style.bg}
                    className="drawer-about"
                  >
                    <div>
                      <h4 className="about-label">information</h4>
                      <About
                        about={about}
                      />
                    </div>
                  </Drawer>
                </div>
                <div className="blog-initial">
                  <div style={{ position: 'relative', height: '100vh', width: '50vw' }}>
                    <h4 onClick={this.handleFirstBlogClick} className="blog-label" >blog</h4>
                    <div onClick={this.handleFirstBlogClick}>
                      <ArticlesContainerInitial />
                    </div>
                  </div>
                  <ArticlesContainer
                    handleViewPost={this.handleViewPost}
                    handleDismissPost={this.handleDismissPost}
                    viewPost={this.state.viewPost}
                    blogOpen={this.state.blogOpen}
                    postId={this.state.postId}
                    currentPost={this.state.currentPost}
                  />
                </div>
                <div className={contentWidth}>
                  <ArtistsContainer
                    blogOpen={this.state.blogOpen}
                    aboutOpen={this.state.aboutOpen}
                    initial={this.state.initial}
                  />
                </div>
              </div>
              <div
                style={{
                  position: 'relative', height: '40px', width: '40px', marginTop: '-40px'
                }}
              >
                <Marquee />
                <img className="swiss-flag" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="swiss flag" />
              </div>
            </div>
          </MediaQuery>
        </div>
      );
    }
  }
  if(this.state.aboutSection) {
    let about = this.state.aboutSection[0].data.about_section.about.value[0].text;
    return (
      <div>
        <MediaQuery maxWidth={767}>
          <div
            style={{
              backgroundColor: '#FF001F', position: 'relative', width: '100vw', overflowX: 'hidden', overflowY: 'scroll', height: '100vh'
            }}
          >
              <div className="about-tab-mobile" onClick={this.handleAboutToggle}>
                <h4 className="about-label-mobile">information</h4>
              </div>
              <Drawer
                open={this.state.aboutOpen}
                width="91%"
                containerStyle={style.bg}
                onTouchTap={this.handleAboutClose}
              >
                <div style={{ height: '100%', overflowY: 'scroll' }}>
                  <h4 className="about-label">information</h4>
                  <AboutMobile
                    about={about}
                    handleAboutClose={this.handleAboutClose}
                  />
                </div>
              </Drawer>
              <div className="blog-tab-mobile" onClick={this.handleBlogToggle}>
                <div className="blog-label-container">
                  <h4 className="blog-label-mobile">blog</h4>
                </div>
              </div>
              <ArticlesContainerMobile
                handleViewPost={this.handleViewPost}
                handleDismissPost={this.handleDismissPost}
                viewPost={this.state.viewPost}
                blogOpen={this.state.blogOpen}
                postId={this.state.postId}
                currentPost={this.state.currentPost}
                handleBlogClose={this.handleBlogClose}
                handleBlogToggle={this.handleBlogToggle}
              />
              <InfoCopyMobile />
              <ArtistsContainerMobile />
              <div onClick={this.handlePanelToggle} style={{ position: 'fixed', bottom: '0', zIndex: '2000' }}>
                <div style={{ display: displayMarquee }}>
                  <MarqueeMobile />
                  <img className="swiss-flag" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="swiss flag" />
                </div>
                <div style={{ position: 'relative', display: displayPanel, backgroundColor: 'black', color: 'white', height: '50vh', width: '100vw' }}>
                  <div style={{ position: 'absolute', left: '0', width: '30px', height: '100%', backgroundColor: '#FF001F' }}><Icon type="close" style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', paddingTop: '5px' }} /></div>
                  <a href="mailto:zurich@sangbleu.tattoo" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><p className="marquee-mailto-mobile">book now — zurich@sangbleu.tattoo</p></a>
                </div>
              </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <div style={{ height: '100vh' }}>
            <div
              style={{
                position: 'relative', height: '100vh', backgroundColor: '#FF001F', borderLeft: '40px solid black', borderRight: '40px solid black', height: '100vh'
              }}
            >
              <div className="about-tab" onClick={this.handleAboutToggle}>
                <div className="about-label-container">
                  <h4 className="about-label">information</h4>
                </div>
                <Drawer
                  open={this.state.aboutOpen}
                  width="44%"
                  containerStyle={style.bg}
                  className="drawer-about"
                >
                  <div>
                    <AboutLabel>information</AboutLabel>
                    <About
                      about={about}
                    />
                  </div>
                </Drawer>
              </div>
              <div className="blog-tab" onClick={this.handleBlogToggle}>
                <div className="blog-label-container">
                  <h4 className="blog-label">blog</h4>
                </div>
                <ArticlesContainer
                  handleViewPost={this.handleViewPost}
                  handleDismissPost={this.handleDismissPost}
                  viewPost={this.state.viewPost}
                  blogOpen={this.state.blogOpen}
                  postId={this.state.postId}
                  currentPost={this.state.currentPost}
                />
              </div>
              <div className={contentWidth}>
                <ArtistsContainer
                  blogOpen={this.state.blogOpen}
                  aboutOpen={this.state.aboutOpen}
                  initial={this.state.initial}
                />
              </div>
            </div>
            <div
              style={{
                position: 'relative', height: '40px', width: '40px', marginTop: '-40px'
              }}
            >
              <Marquee />
              <img className="swiss-flag" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" alt="swiss flag" />
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  } return ( <div/> )
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

export default compose(withConnect, )(HomePageZurich);

// <Icon type="caret-right" style={{ marginLeft: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />
// <Icon type="caret-left" style={{ right: '0', marginRight: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />

// <div style={{ position: 'relative', height: '40px', width: '40px' }}>
//   <Marquee />
//   <Image className='swiss-flag' cloudName="kurzweg" publicId="flag" alt="swiss flag" quality="auto" crop="scale" responsive />
// </div>

// <Image className="zurich-logo-mobile" cloudName="kurzweg" publicId="logozurich" alt="sang bleu zurich" quality="auto" crop="scale" responsive />


