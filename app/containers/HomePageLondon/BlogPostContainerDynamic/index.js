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
import ReactPlayer from 'react-player'
import {Link, RichText} from 'prismic-reactjs';
import PrismicDOM from 'prismic-dom';
import linkResolver from '../../../constants';

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
  margin-bottom: 15px;
`;

const ModalText = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  padding: 1%;
  font-size: 1.04vw;
  font-family: SuisseRegular;
  line-height: 20px;
  color: black;
  width: 100%;
  text-decoration: none;
  color: black !important;
`;

const ModalDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 35px;
  margin-bottom: 35px;
  text-align: center;
  letter-spacing: 2px;
`;

const ImageCaption = styled.h4`
  margin-bottom: 20px;
  padding: 1%;
  font-size: 12px;
  letter spacing: 1.1px;
  font-family: SuisseRegular;
  line-height: 20px;
  color: black;
  max-width: 100%;
  text-align: center;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.getComponent = this.getComponent.bind(this);
  }

  getComponent(slice) {
    let type = slice.slice_type
    switch(type){
      case 'image':
        return <div>
                {slice.items.map((image, idx, images) => (
                  <div key={idx}>
                    <ModalImg src={image.image ? image.image.url : ''} key={idx} />
                    <ImageCaption className="dynamic-link-zurich">{image.caption ? RichText.render(image.caption, linkResolver) : ''}</ImageCaption>
                  </div>
                  ))}
                </div>;
                break;
      case 'text' :
        return <div>
                  {slice.items.map((item, idx, items) => (
                        <ModalText key={idx + 1} className="dynamic-link-zurich">{RichText.render(item.text, linkResolver)}</ModalText>)
                      )}
                </div>;
                break;
      case 'media' :
        return <div>
                  {slice.items.map((item, idx, items) => (
                    <ReactPlayer key={idx + 2} url={item.embed.embed_url} style={{ display: 'block', margin: '0 auto', width: '100%'}} />
                      ))}
                </div>;
          break;
      default:
        return ''; }
  }


  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data;
      const slices = article.body

      return (
        <div style={{ width: '75%', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#FFFFFF', color: 'black', position: 'absolute', right: '0', marginRight: '-15vw', width: '150px', height: '200px', top: '0' }} onClick={this.props.closeModal}>
            <p style={{ fontFamily: 'SuisseLight', fontSize: '12px', letterSpacing: '1.1px', lineHeight: '20px', textTransform: 'uppercase', marginTop: '40px' }}>close</p>
          </div>
          <ModalDate>
            {article.date ? article.date : ''}
          </ModalDate>
          <ModalTitle>
            {article.title1[0].text}
          </ModalTitle>
          {slices.map(slice => this.getComponent(slice))}
          <div style={{ height: '25vh' }}></div>
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
