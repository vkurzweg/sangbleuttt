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
import ReactPlayer from 'react-player';
import {Link, RichText} from 'prismic-reactjs';
import PrismicDOM from 'prismic-dom';
import linkResolver from '../../../constants';


const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 20px;
  letter-spacing: -1px;
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
  width: 100%;
  display: block;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: white;
  font-family: SuisseRegular;
  letter-spacing: 1.49px;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const ImageCaption = styled.h4`
  font-size: 14px;
  color: white;
  font-family: SuisseRegular;
  letter-spacing: 1.49px;
  width: 80%;
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 3vh;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    }
    this.getComponent = this.getComponent.bind(this);
  }


    getComponent(slice) {
      let type = slice.slice_type

      switch(type){
        case 'image':
          return <div>
                  {slice.items.map((image, idx, images) => (
                    <div>
                      <PostImage src={image.image1 ? image.image1.url : ''} key={idx} />
                      <ImageCaption className="dynamic-link-zurich">{image.caption ? RichText.render(image.caption, linkResolver) : ''}</ImageCaption>
                    </div>
                    ))}
                  </div>;
                  break;
        case 'text' :
          return <div>
                    {slice.items.map((item, idx, items) => (
                          <PostContent className="dynamic-link-zurich" key={idx + 1}>{RichText.render(item.text, linkResolver)}</PostContent>)
                        )}
                  </div>;
                  break;
        case 'media' :
          return <div>
                    {slice.items.map((item, idx, items) => (
                      <ReactPlayer url={item.embed.embed_url} style={{ display: 'block', margin: '0 auto', width: '100%'}} />
                        ))}
                  </div>;
            break;
        default:
          return ''; }
    }

  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data;
      console.log(this.props.currentPost[0].data);
      const slices = article.body
      let displayButton = 'block';
      this.state.button ? displayButton : displayButton = 'none';
      return (
        <div style={{ position: 'relative', overflowY: 'scroll', overflowX: 'hidden', height: '100%' }}>
          <div
            type="close"
            onClick={this.props.handleDismissPost}
            style={{
              backgroundColor: '#FF001F', fontSize: '19px', right: '0', top: '0', bottom: '0', width: '30px', height: '200%', position: 'absolute'
            }}
          >
            <h4 className="close-label">close</h4>
          </div>
          <div style={{ width: '100%', margin: '0 auto', marginRight: '30px' }}>
            <div style={{ marginRight: '30px' }} >
              <Title>{article.title[0].text}</Title>
            </div>
            <PostDate>{article.date}</PostDate>
            {slices.map(slice => this.getComponent(slice))}
            <div style={{ height: '15vh' }}></div>
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
            position: 'absolute', backgroundColor: '#FF001F', fontSize: '3vw', right: '0', top: '0', bottom: '0', width: '40px', height: '100%'
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
  handleDismissPost: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(BlogPostContainer);
