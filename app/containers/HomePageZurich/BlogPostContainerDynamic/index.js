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
import ReactPlayer from 'react-player'

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 55px;
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
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const ImageCaption = styled.h4`
  font-size: 14px;
  color: white;
  font-family: SuisseRegular;
  letter-spacing: 2.36px;
  width: 70%;
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 3vh;
  text-align: center;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.getComponent = this.getComponent.bind(this);
  }

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
     }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  getComponent(slice) {
    let type = slice.slice_type
    console.log('type', slice)

    switch(type){
      case 'image':
        return <div>
                {slice.repeat.map((image, idx, images) => (
                  <div>
                    <PostImage src={image.image1 ? image.image1.value.main.url : ''} key={idx} />
                    <ImageCaption>{image.caption ? image.caption.value[0].text : ''}</ImageCaption>
                  </div>
                  ))}
                </div>;
                break;
      case 'text' :
        return <div>
                  {slice.repeat.map((item, idx, items) => (
                    item.text.value.map((text, idx, texts) =>(
                        <PostContent key={idx + 1}>{text.text}</PostContent>))
                      ))}
                </div>;
                break;
      case 'media' :
        return <div>
                  {slice.repeat.map((item, idx, items) => (
                    <ReactPlayer url={item.embed.value.oembed.embed_url} style={{ display: 'block', margin: '0 auto', width: '100%'}} />
                      ))}
                </div>;
          break;
      default:
        return ''; }
  }

   handleScroll(event) {
    console.log('scrolling')
    let lastScrollTop = 0;
    var st = document.documentElement.scrollTop;
       if (st > lastScrollTop){
         this.setState({
         });
       } else {
         this.setState({
         })
       }
       st = lastScrollTop;
     }

  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data.dynamic_post;
      console.log(this.props.currentPost[0].data.dynamic_post);
      const slices = article.body.value
      let displayButton = 'block';
      this.state.button ? displayButton : displayButton = 'none';
      return (
        <div onScroll={this.handleScroll} style={{ position: 'relative', overflowY: 'scroll', overflowX: 'hidden', height: '100%' }}>
          <div
            type="close"
            onClick={this.props.handleDismissPost}
            style={{
              display: displayButton, position: 'fixed', backgroundColor: '#FF001F', fontSize: '19px', right: '0', top: '0', width: '30px', height: '120vh'
            }}
          >
            <h4 className="close-label">close</h4>
          </div>
          <div style={{ width: '85%', margin: '0 auto' }}>
            <Title>{article.title.value[0].text}</Title>
            <PostDate>{article.date.value}</PostDate>
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
  handleDismissPost: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(BlogPostContainer);


