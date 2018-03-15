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
  padding-top: 5vh;
  padding-bottom: 5vh;
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
  width: 100%;
  height: 100%;
  display:block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;


export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { docs: [] };
  }


  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api';
    Prismic.getApi(apiEndpoint).then((api) => api.query('')).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      this.setState({ docs: documents });
    }, (err) => {
      console.log('Something went wrong: ', err);
    });
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
              open={this.props.blogOpen}
              width="89%"
              containerStyle={style.bg}
              onTouchTap={this.props.handleBlogClose}
              openSecondary
            >
            <div style={{ height: '100%', overflowY: 'scroll' }}>
              <h4 className='blog-open-label-mobile' onClick={this.props.handleBlogClose}>blog</h4>
              { articles.map((article, idx, articles) => (
                <div key={idx} onClick={this.props.handleViewPost.bind(this, article.id)}>
                  <Article>
                    <Title>
                      {article.data.blog_post.title.value[0].text}
                    </Title>
                    <PostDate>
                      {article.data.blog_post.date.value}
                    </PostDate>
                    <StyledImage style={{ background: `url(${article.data.blog_post.main_image.value.main.url}) no-repeat center` }} alt={article.data.blog_post.main_image.value.main.alt}>
                    </StyledImage>
                  </Article>
                </div>
              ))}
            </div>
          </Drawer>
          <Drawer
            open={this.props.viewPost}
            width="100%"
            containerStyle={style.bg}
            openSecondary
            className="drawer-post"
            docked={false}
            onRequestChange={this.props.handleDismissPost}
          >
            <BlogPostContainerMobile
              handleDismissPost={this.props.handleDismissPost}
              postId={this.props.postId}
              currentPost={this.props.currentPost}
            />
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
