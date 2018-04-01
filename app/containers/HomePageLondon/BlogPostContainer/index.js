/**
 *
 * BlogPostContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';


const ModalTitle = styled.h3`
  margin-top: 35px;
  margin-bottom: 35px;
  text-align: center;
  font-family: SangBleu;
  font-size: 25px;
  letter-spacing: 7.78px;
  text-transform: uppercase;
`;

const ModalImg = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  padding: 1em;
  max-height: 100%;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const ModalText = styled.p`
  margin-top: 35px;
  margin-bottom: 35px;
  padding: 1%;
  font-size: 1.04vw;
  font-family: SuisseRegular;
  line-height: 20px;
  color: black;
  width: 100%;
`;

const ModalDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 35px;
  margin-bottom: 35px;
  text-align: center;
  letter-spacing: 2px;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data.blog_post;
      let image2 = <div />;
      let image3 = <div />;
      let image4 = <div />;
      let image5 = <div />;
      let image6 = <div />;
      let image7 = <div />;
      let image8 = <div />;
      let image9 = <div />;
      let image10 = <div />;
      let body2 = <div />;
      let body3 = <div />;
      if (article.image2) image2 = <ModalImg src={article.image2.value.main.url} alt={article.image2.value.alt} />;
      if (article.image3) image3 = <ModalImg src={article.image3.value.main.url} alt={article.image3.value.alt} />;
      if (article.image4) image4 = <ModalImg src={article.image4.value.main.url} alt={article.image4.value.alt} />;
      if (article.image5) image5 = <ModalImg src={article.image5.value.main.url} alt={article.image5.value.alt} />;
      if (article.image6) image6 = <ModalImg src={article.image6.value.main.url} alt={article.image6.value.alt} />;
      if (article.image7) image7 = <ModalImg src={article.image7.value.main.url} alt={article.image7.value.alt} />;
      if (article.image8) image8 = <ModalImg src={article.image8.value.main.url} alt={article.image8.value.alt} />;
      if (article.image9) image9 = <ModalImg src={article.image9.value.main.url} alt={article.image9.value.alt} />;
      if (article.image10) image10 = <ModalImg src={article.image10.value.main.url} alt={article.image10.value.alt} />;
      if (article.body2) body2 = <ModalText>{article.body2.value[0].text}</ModalText>
      if (article.body3) body3 = <ModalText>{article.body3.value[0].text}</ModalText>

      return (
        <div style={{ width: '75%', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#FFFFFF', color: 'black', position: 'absolute', right: '0', marginRight: '-15vw', width: '150px', height: '200px', top: '0' }} onClick={this.props.closeModal}>
            <p style={{ fontFamily: 'SuisseLight', fontSize: '12px', letterSpacing: '1.1px', lineHeight: '20px', textTransform: 'uppercase', marginTop: '40px' }}>close</p>
          </div>
          <ModalDate>
            {article.date.value}
          </ModalDate>
          <ModalTitle>
            {article.title.value[0].text}
          </ModalTitle>
          <ModalImg src={article.main_image.value.main.url} alt={article.main_image.value.alt} />
          <ModalText>{article.body.value[0].text}</ModalText>
          {image2}
          {image3}
          {image4}
          {body2}
          {image5}
          {image6}
          {image7}
          {body3}
          {image8}
          {image9}
          {image10}
        </div>
      );
    } return (<p>Loading...</p>);
  }
}

BlogPostContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(BlogPostContainer);
