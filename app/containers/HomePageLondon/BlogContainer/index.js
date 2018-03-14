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
import Prismic from 'prismic-javascript';
import styled from 'styled-components';
import Modal from 'antd/lib/modal';
import ReactHover from 'react-hover';
import Footer from 'components/london/Footer';
import BlogPostContainer from '../BlogPostContainer';

const Title = styled.h3`
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 0 auto;
  font-family: SangBleu;
  text-align: center;
  font-size: 45px;
  letter-spacing: 14px;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-family: SuisseLight;
  font-size: 32px;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 5px;
  line-height: 20px;
`;

const PostDate = styled.h5`
  display: inline;
  padding-right: 39px;
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 1.1px;
  line-height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
`;



const options = {
  followCursor: false,
};

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      modalIsOpen: false,
      postIdLondon: '',
      currentPostLondon: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.getApi(apiEndpoint).then((api) =>
      api.query('') // An empty query will return all the documents
    ).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      this.setState({ docs: documents });
    }, (err) => {
      console.log('Something went wrong: ', err);
    });
  }

  openModal(postId) {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.id', postId),).then((response) => {
      console.log('Post: ', response.results[0]);
      const document = response.results;
      return this.setState({
        currentPostLondon: document, postIdLondon: postId, modalIsOpen: true
      });
    }));
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    if (this.state.docs.length > 0) {
      // shortcuts for cms data
      const documents = this.state.docs;
      const article0 = documents[0];
      const article1 = documents[1];
      const article2 = documents[2];
      const articles = [article0, article1, article2];
      // variables for images to avoid errors if a post has less than 4 images (TODO: DRY refactor)
      // TODO: make page for all posts, accessible via link that appears when there are more than 3 posts
      const articlesNum = this.state.docs.length;
      let link;
      if (articlesNum > 3) link = <a href="#" style={{ fontStyle: 'underline', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>See all articles</a>;
      return (
        <div id="blog" style={{ position: 'relative', height: '120vh', width: '100%' }}>
          <Helmet>
            <title>Sang Bleu London Blog</title>
            <meta name="description" content="News and features published by the Sang Bleu tattoo studio in London." />
          </Helmet>
          <div className="articles-container">
            { articles.map((article, idx, articles) => (
                <div key={idx} className={`london-article-container london-article-container${idx}`}>
                  <ReactHover
                    options={options}>
                    <ReactHover.Trigger type="trigger">
                      <div className="article">
                        <a className="article-link" onClick={this.openModal.bind(this, article.id)} href="#" style={{ textDecoration: 'none', width: '70%', margin: '0 auto' }}>
                          <div className={`article${idx}`} style={{ position: 'relative' }}>
                            <PostDate className="article-title article-text">
                              {article.data.blog_post.date.value}
                            </PostDate>
                            <Title className="article-title article-text">
                              {article.data.blog_post.title.value[0].text}
                            </Title>
                          </div>
                          <Subtitle className="article-title article-text">
                            {article.data.blog_post.subhead.value}
                          </Subtitle>
                        </a>
                      </div>
                    </ReactHover.Trigger>
                    <ReactHover.Hover type="hover" style={{ width: '100%', margin: '0 auto' }}>
                      <div className="hover-container">
                        <div className="article-image" style={{ backgroundImage: `url(${article.data.blog_post.main_image.value.main.url})` }} alt={article.data.blog_post.main_image.value.alt}>
                          <div className={`article-hover article-hover${idx}`}>
                            <a className="article-link" onClick={this.openModal.bind(this, article.id)} href="#" style={{ textDecoration: 'none', width: '70%', margin: '0 auto' }}>
                              <div style={{ position: 'relative' }}>
                                <PostDate className="article-title mix-test">
                                  {article.data.blog_post.date.value}
                                </PostDate>
                                <Title className="article-title mix-test">
                                  {article.data.blog_post.title.value[0].text}
                                </Title>
                              </div>
                              <Subtitle className="article-title mix-test">
                                {article.data.blog_post.subhead.value}
                              </Subtitle>
                            </a>
                          </div>
                        </div>
                      </div>
                    </ReactHover.Hover>
                  </ReactHover>
                  <Modal visible={this.state.modalIsOpen} onCancel={this.closeModal} title={null} footer={null} style={{ width: '75%', margin: '0 auto' }} maskStyle={{ backgroundColor: 'transparent' }} >
                      <BlogPostContainer
                        currentPost={this.state.currentPostLondon}
                        postId={this.state.postIdLondon} />
                  </Modal>
                </div>
            ))}
          </div>
          {link}
          <div
            style={{
              position: 'relative', height: '15vh', width: '100%', bottom: '0'
            }}
          >
            <Footer />
          </div>
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
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(ArticlesContainer);
