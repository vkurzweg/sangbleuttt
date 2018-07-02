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
import FooterMobile from 'components/london/FooterMobile';
import {Link, RichText} from 'prismic-reactjs';
import PrismicDOM from 'prismic-dom';
import linkResolver from '../../../constants';


const Brand = styled.h1`
  margin-left: 31vw;
  font-family: SuisseIntlSemiBold;
  text-align: right;
  color: black;
  overflow: visible;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: 0.16px;
  z-index: 4001;
  padding-right: 3vw;
  margin-top: -4.8vh;
`;

const PostDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 50px;
  text-align: center;
  letter-spacing: 2px;
`;

const Title = styled.h3`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3vh;
  font-family: SangBleu;
  text-align: center;
  font-size: 35px;
  letter-spacing: 10.89px;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  padding-left: 10px;
  padding-right: 10px;
  font-family: SuisseLight;
  font-size: 20px;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 100px;
`;

const StyledImg = styled.img`
    width: 355px;
    margin: 0 auto;
    display: block;
    height: 350px;
    object-fit: cover;
  &::before {
    will-change: transform;
  }
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-family: SangBleu;
  font-size: 25px;
  letter-spacing: 7.78px;
  line-height: 37px;
  text-transform: uppercase;
  width: 268px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ModalImg = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  max-height: 100%;
`;

const ModalText = styled.p`
  font-size: 15px;
  font-family: SuisseRegular;
  line-height: 20px;
  width: 353px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ModalDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 100px;
  margin-bottom: 25px;
  text-align: center;
  letter-spacing: 2px;
`;

const ImageCaption = styled.h4`
  font-size: 12px;
  font-family: SuisseRegular;
  line-height: 20px;
  width: 353px;
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      modal1IsOpen: false,
      modal2IsOpen: false,
      modal3IsOpen: false
    };
    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.getComponent = this.getComponent.bind(this);
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'dynamicpost'),).then((response) => {
      const documents = response.results;
      return this.setState({ docs: documents });
    }));
  }

  openModal1() {
    this.setState({ modal1IsOpen: true });
  }

  closeModal1() {
    this.setState({ modal1IsOpen: false });
  }

  openModal2() {
    this.setState({ modal2IsOpen: true });
  }

  closeModal2() {
    this.setState({ modal2IsOpen: false });
  }

  openModal3() {
    this.setState({ modal3IsOpen: true });
  }

  closeModal3() {
    this.setState({ modal3IsOpen: false });
  }

  getComponent(slice) {
    let type = slice.slice_type

    switch(type){
      case 'image':
        return <div>
                {slice.items.map((image, idx, images) => (
                  <div>
                    <ModalImg src={image.image ? image.image.url : ''} key={idx} />
                    <ImageCaption className="dynamic-link">{image.caption ? RichText.render(image.caption, linkResolver) : ''}</ImageCaption>
                  </div>
                  ))}
                </div>;
                break;
      case 'text' :
        return <div>
                  {slice.items.map((item, idx, items) => (
                    item.text.map((text, idx, texts) =>(
                        <ModalText className="dynamic-link" key={idx + 1}>{RichText.render(item.text, linkResolver)}</ModalText>))
                      ))}
                </div>;
                break;
      case 'media' :
        return <div>
                  {slice.items.map((item, idx, items) => (
                    <ReactPlayer url={item.embed.oembed.embed_url} style={{ display: 'block', margin: '0 auto', width: '100%'}} />
                      ))}
                </div>;
          break;
      default:
        return ''; }
  }

  render() {
    if (this.state.docs.length > 0) {
    // shortcuts for cms data
      const documents = this.state.docs;
      const article1 = documents[0].data;
      const article2 = documents[1].data;
      const article3 = documents[2].data;
      console.log(documents);
      const articles = [article1, article2, article3];
      const slices1 = article1.body;
      const slices2 = article2.body;
      const slices3 = article3.body;
      // TODO: make page for all posts, accessible via link that appears when there are more than 3 posts
      const articlesNum = this.state.docs.length;
      let link;
      if (articlesNum > 3) {
        link = (<a
          href="#"
          style={{
            fontStyle: 'underline', textAlign: 'center', textDecoration: 'none', cursor: 'pointer'
          }}
        >See all articles
                </a>);
      }
      let display1;
      this.state.modal1IsOpen ? display1 = 'block' : display1 = 'none';
      let display2;
      this.state.modal2IsOpen ? display2 = 'block' : display2 = 'none';
      let display3;
      this.state.modal3IsOpen ? display3 = 'block' : display3 = 'none';

      return (
        <div id="blog" style={{ paddingTop: '8vh', overflow: 'hidden' }}>
          <Helmet>
            <title>Sang Bleu London</title>
            <meta name="description" content="" />
          </Helmet>

          <div>

            <div>
              <div onClick={this.openModal1} style={{ textDecoration: 'none' }}>
                <StyledImg src={article1.image1.url} alt={article1.image1.alt} />
                <PostDate>
                  {article1.date ? article1.date : ''}
                </PostDate>
                <Title>
                  {article1.title1[0].text}
                </Title>
                <Subtitle>
                  {article1.strapline[0].text}
                </Subtitle>
              </div>
            </div>


            <div>
              <div onClick={this.openModal2} style={{ textDecoration: 'none' }}>
                <StyledImg src={article2.image1.url} alt={article2.image1.alt} />
                <PostDate>
                  {article2.date ? article2.date : ''}
                </PostDate>
                <Title>
                  {article2.title1[0].text}
                </Title>
                <Subtitle>
                  {article2.strapline[0].text}
                </Subtitle>
              </div>
            </div>

            <div>
              <div onClick={this.openModal3} style={{ textDecoration: 'none' }}>
                <StyledImg src={article3.image1.url} alt={article3.image1.alt} />
                <PostDate>
                  {article3.date ? article3.date : ''}
                </PostDate>
                <Title>
                  {article3.title1[0].text}
                </Title>
                <Subtitle>
                  {article3.strapline[0].text}
                </Subtitle>
              </div>
            </div>

          </div>

          {link}

          <div
            className="mobile-scroll" style={{ display: display1, position: 'fixed', top: '0', height: '100vh', width: '100vw', overflowY: 'scroll', margin: '0 auto', zIndex: '2000', backgroundColor: '#FFFFFF', paddingBottom: '15vh' }}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', top: '0', left: '0', borderBottom: '2px solid black', width: '100%', zIndex: '4000'
              }}
            >
              <h3
                style={{
                  fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '23px', letterSpacing: '.16px', paddingLeft: '4vw', paddingTop: '2vh'
                }}
              >blog
              </h3>
              <Brand>Sang Bleu London</Brand>
            </div>
              <div
                onClick={this.closeModal1}
                role="button"
                style={{
                  backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', bottom: '0', left: '0', borderTop: '2px solid black', width: '100%', zIndex: '100'
                }}
              >
                <p
                  style={{
                    fontFamily: 'SuisseLight', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', padding: '4%'
                  }}
                >close
                </p>
              </div>
              <ModalDate>
                {article1.date ? article1.date.value : ''}
              </ModalDate>
              <ModalTitle>
                {article1.title1[0].text}
              </ModalTitle>
              {slices1.map(slice => this.getComponent(slice))}
              <div style={{ height: '10vh' }}></div>
          </div>

          <div
            className="mobile-scroll" style={{ display: display2, position: 'fixed', top: '0', height: '100vh', width: '100vw', overflowY: 'scroll', margin: '0 auto', zIndex: '2000', backgroundColor: '#FFFFFF', paddingBottom: '15vh' }}
          >
              <div
                style={{
                  backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', top: '0', left: '0', borderBottom: '2px solid black', width: '100%', zIndex: '4000'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '23px', letterSpacing: '.16px', paddingLeft: '4vw', paddingTop: '2vh'
                  }}
                >blog
                </h3>
                <Brand>Sang Bleu London</Brand>
              </div>
              <div
                onClick={this.closeModal2}
                role="button"
                style={{
                  backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', bottom: '0', left: '0', borderTop: '2px solid black', width: '100%', zIndex: '100'
                }}
              >
                <p
                  style={{
                    fontFamily: 'SuisseLight', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', padding: '4%'
                  }}
                >close
                </p>
              </div>
              <ModalDate>
                {article2.date ? article2.date.value : ''}
              </ModalDate>
              <ModalTitle>
                {article2.title1[0].text}
              </ModalTitle>
              {slices2.map(slice => this.getComponent(slice))}
              <div style={{ height: '10vh' }}></div>
          </div>

          <div
            className="mobile-scroll" style={{ display: display3, position: 'fixed', top: '0', height: '100vh', width: '100vw', overflowY: 'scroll', margin: '0 auto', zIndex: '2000', backgroundColor: '#FFFFFF', paddingBottom: '15vh' }}
          >
              <div
                style={{
                  backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', top: '0', left: '0', borderBottom: '2px solid black', width: '100%', zIndex: '4000'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '23px', letterSpacing: '.16px', paddingLeft: '4vw', paddingTop: '2vh'
                  }}
                >blog
                </h3>
                <Brand>Sang Bleu London</Brand>
              </div>
              <div
                onClick={this.closeModal3}
                role="button"
                style={{
                  backgroundColor: '#FFFFFF', height: '8vh', position: 'fixed', bottom: '0', left: '0', borderTop: '2px solid black', width: '100%', zIndex: '100'
                }}
              >
                <p
                  style={{
                    fontFamily: 'SuisseLight', textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', padding: '4%'
                  }}
                >close
                </p>
              </div>
              <ModalDate>
                {article3.date ? article3.date.value : ''}
              </ModalDate>
              <ModalTitle>
                {article3.title1[0].text}
              </ModalTitle>
              {slices3.map(slice => this.getComponent(slice))}
              <div style={{ height: '10vh' }}></div>
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
