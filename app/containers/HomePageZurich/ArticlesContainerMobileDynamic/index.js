/**
 *
 * ArticlesContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import Prismic from 'prismic-javascript';
import ReactHover from 'react-hover';
import { Image } from 'cloudinary-react';
import Drawer from 'material-ui/Drawer';
import BlogPostContainerMobile from '../BlogPostContainerMobile';
import BlogPostContainerMobileDynamic from '../BlogPostContainerMobileDynamic';
import Icon from 'antd/lib/icon';


const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
    height: '100vh',
    overflow: 'visible'
  }
};


const Article = styled.div`
  position: relative;
  padding-top: 7vh;
  padding-bottom: 2vh;
  width: 90%;
  display: block;
  margin: 0 auto;
  opacity: .9;
  border: 0;
  background: transparent;
  outline: 0;
  &:hover{
    opacity: 1;
    outline: 0;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 20px;
  letter-spacing: -1px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: -2vh;
  letter-spacing: 2.36px;
  margin-bottom: -2vh;
`;

const StyledImage = styled.div`
  margin-top: -3vh;
  display:block;
  margin: 0 auto;
  margin-right: -15px;
  width: 80vw;
  height: 40vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  &:before {
    will-change: transform
  }
`;


export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { docs: [] };
  }


  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'dynamic_post'),).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      return this.setState({ docs: documents });
    }));
  }

  render() {

    if (this.state.docs.length > 0) {
      const documents = this.state.docs;
      const article0 = documents[0];
      const article1 = documents[1];
      const article2 = documents[2];
      const article3 = documents[3];
      const articles = [article0, article1, article2, article3];
      return (
        <div>
          <Helmet>
            <title>Sang Bleu Zurich</title>
            <meta name="description" content="Artist portfolios, news, and upcoming events at the Sang Bleu tattoo studio in Zurich, Switzerland." />
          </Helmet>
            <Drawer
              open={this.props.viewPost}
              width="100%"
              containerStyle={style.bg}
              openSecondary
              className="drawer-post"
              docked={false}
              onRequestChange={this.props.handleDismissPost}
            >
              <BlogPostContainerMobileDynamic
                handleDismissPost={this.props.handleDismissPost}
                postId={this.props.postId}
                currentPost={this.props.currentPost}
              />
            </Drawer>
            <Drawer
              open={this.props.blogOpen}
              width="89%"
              containerStyle={style.bg}
              onRequestChange={this.props.handleBlogClose}
              openSecondary
              overlayStyle={{ backgroundColor: 'transparent', zIndex: '1' }}
            >
            <div onClick={this.props.handleBlogClose} style={{ height: '100%', overflowY: 'scroll' }}>
              { articles.map((article, idx, articles) => (
                <div key={idx}>
                  <Article>
                    <Title onClick={this.props.handleViewPost.bind(this, article.id)}>
                      {article.data.title[0].text}
                    </Title>
                    <PostDate onClick={this.props.handleViewPost.bind(this, article.id)}>
                      {article.data.date}
                    </PostDate>
                    <StyledImage onClick={this.props.handleViewPost.bind(this, article.id)} style={{ background: `url(${article.data.image.url}) no-repeat center` }} alt={article.data.image.alt}>
                    </StyledImage>
                  </Article>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      );
    }
    return (
      <p>Loading...</p>
    );
  }
}

ArticlesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  blogOpen: PropTypes.bool,
  handleDismissPost: PropTypes.func,
  handleViewPost: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(ArticlesContainer);

// <h4 className='blog-open-label-mobile' onClick={this.props.handleBlogClose}>blog</h4>

