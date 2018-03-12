/**
 *
 * BlogPostContainer
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 40px;
  letter-spacing: -1.99px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
  padding-top: 10vh;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: 3vh;
  letter-spacing: 2.36px;
`;

const PostImage = styled.img`
  max-width: 70%;
  display: block;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const PostContent = styled.p`
  font-size: 19px;
  color: white;
  font-family: SuisseRegular;
  letter-spacing: 2.36px;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data.blog_post;
      console.log(this.props.currentPost[0].data.blog_post);
      let image2 = <div />;
      let image3 = <div />;
      let articlePart2 = <div />;
      const image4 = <div />;
      if (article.image2) image2 = <PostImage src={article.image2.value.main.url} />;
      if (article.image3) image3 = <PostImage src={article.image3.value.main.url} />;
      if (article.article_part_2) articlePart2 = <PostContent>{article.article_part_2.value[0].text}</PostContent>;
      if (article.image4) image3 = <PostImage src={article.image4.value.main.url} />;
      return (
        <div style={{ position: 'relative', overflow: 'scroll', height: '100%' }}>
          <button
            type="close"
            onClick={this.props.handleDismissPost}
            style={{
              position: 'absolute', backgroundColor: '#FF001F', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '120vh'
            }}
          >
            <h4 className="close-label">close</h4>
          </button>
          <div style={{ width: '85%', margin: '0 auto' }}>
            <Title>{article.title.value[0].text}</Title>
            <PostDate>{article.date.value}</PostDate>
            <PostImage src={article.main_image.value.main.url} />
            <PostContent>{article.article_part_1.value[0].text}</PostContent>
            {image2}
            {image3}
            {articlePart2}
            {image4}
          </div>
        </div>
      );
    }
    return (
      <div style={{ position: 'relative', overflow: 'scroll', height: '100%' }}>
        <button
          type="close"
          onClick={this.props.handleDismissPost}
          style={{
            position: 'absolute', backgroundColor: '#FF001F', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '120vh'
          }}
        >
          <h4 className="close-label">close</h4>
        </button>
        <p>Loading...</p>
      </div>
    );
  }
}

BlogPostContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentPost: PropTypes.obj,
  handleDismissPost: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(BlogPostContainer);
