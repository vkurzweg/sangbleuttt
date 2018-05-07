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
import BlogPostContainer from '../BlogPostContainer';

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
    height: '100vh',
    overflow: 'visible'
  }
};


const Article = styled.div`
  width: 90%;
  display: inline-block;
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
  font-size: 40px;
  letter-spacing: -1.99px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: -4vh;
  letter-spacing: 2.36px;
  padding-left: 5%;
`;

const StyledImage = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  display:block;
  margin: 0 auto;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  border: none;
  top: 0;
  overflow: hidden;
`;

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { docs: [] };
  }


  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'blog_post'),).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      return this.setState({ docs: documents });
    }));
  }

  render() {
    const options = {
      followCursor: false,
    };
    if (this.state.docs.length > 0) {
      const documents = this.state.docs;
      const article0 = documents[0];
      const article1 = documents[1];
      const article2 = documents[2];
      const article3 = documents[3];
      const articles = [article0, article1, article2, article3];
      return (
        <div className="blog-container">
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
          >
            <BlogPostContainer
              handleDismissPost={this.props.handleDismissPost}
              postId={this.props.postId}
              currentPost={this.props.currentPost}
            />
          </Drawer>
          <Drawer
            open={this.props.blogOpen}
            width="45%"
            containerStyle={style.bg}
            openSecondary
            className="drawer-blog"
            overlayStyle={{ backgroundColor: 'transparent', zIndex: '1' }}
          >
            <div style={{ height: '100%' }}>
              <h4 className='blog-label'>blog</h4>

              <div className="blog-wrapper">
                {console.log('id', articles[0].id)}
                { articles.map((article, idx, articles) => (
                  <div key={idx}>
                    <div className="blog-hover-image">
                      <ReactHover
                        options={options}
                      >
                        <ReactHover.Trigger type="trigger" className="trigger">
                          <Article className="titles-container" style={{ marginTop: '7vh' }}>
                            <Title onClick={this.props.handleViewPost.bind(this, article.id)}>
                              {article.data.blog_post.title.value[0].text}
                            </Title><br />
                            <PostDate onClick={this.props.handleViewPost.bind(this, article.id)}>
                              {article.data.blog_post.date.value}
                            </PostDate>
                          </Article>
                        </ReactHover.Trigger>
                        <ReactHover.Hover type="hover">
                          <ImageContainer className="image-container-not">
                            <StyledImage style={{ background: `url(${article.data.blog_post.main_image.value.main.url}) no-repeat center` }} alt={article.data.blog_post.main_image.value.main.alt}>
                              <Image className="zurich-logo" cloudName="kurzweg" publicId="sangbleu/zurich_white" alt="sang bleu zurich" quality="auto" crop="scale" responsive />
                            </StyledImage>
                          </ImageContainer>
                        </ReactHover.Hover>
                      </ReactHover>
                    </div>
                  </div>
                ))}
              </div>
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
