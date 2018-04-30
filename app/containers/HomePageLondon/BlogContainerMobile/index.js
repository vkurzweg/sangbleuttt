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
  margin-top: -5.8vh;
`;

const PostDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 50px;
  text-align: center;
  letter-spacing: 2px;
`;

const Title = styled.h3`
  padding-top: 3vh;
  font-family: SangBleu;
  text-align: center;
  font-size: 35px;
  letter-spacing: 10.89px;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
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
  height: 250px;
  object-fit: cover;
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
  width: 353px;
  display: block;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  height: 250px;
  object-fit: cover;
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
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  letter-spacing: 2px;
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
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'blog_post'),).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      return this.setState({ docs: documents });
    }));
  }

  openModal1() {
    console.log('clicked');
    this.setState({ modal1IsOpen: true });
  }

  closeModal1() {
    console.log('clicked');
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


  render() {
    if (this.state.docs.length > 0) {
    // shortcuts for cms data
      const documents = this.state.docs;
      const article1 = documents[0].data.blog_post;
      const article2 = documents[1].data.blog_post;
      const article3 = documents[2].data.blog_post;
      // variables for images to avoid errors if a post has less than 10 images (TODO: DRY refactor)
      let article1image2;
      let article1image3;
      let article1image4;
      let article1body2;
      let article1image5;
      let article1image6;
      let article1image7;
      let article1body3;
      let article1image8;
      let article1image9;
      let article1image10;
      if (article1.body2) article1body2 = article1.body2.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article1.body3) article1body3 = article1.body3.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article1.image2) article1image2 = <ModalImg src={article1.image2.value.main.url} alt={article1.image2.value.alt} />;
      if (article1.image3) article1image3 = <ModalImg src={article1.image3.value.main.url} alt={article1.image3.value.alt} />;
      if (article1.image4) article1image4 = <ModalImg src={article1.image4.value.main.url} alt={article1.image4.value.alt} />;
      if (article1.image5) article1image5 = <ModalImg src={article1.image5.value.main.url} alt={article1.image5.value.alt} />;
      if (article1.image6) article1image6 = <ModalImg src={article1.image6.value.main.url} alt={article1.image6.value.alt} />;
      if (article1.image7) article1image7 = <ModalImg src={article1.image7.value.main.url} alt={article1.image7.value.alt} />;
      if (article1.image8) article1image8 = <ModalImg src={article1.image8.value.main.url} alt={article1.image8.value.alt} />;
      if (article1.image9) article1image9 = <ModalImg src={article1.image9.value.main.url} alt={article1.image9.value.alt} />;
      if (article1.image10) article1image10 = <ModalImg src={article1.image10.value.main.url} alt={article1.image10.value.alt} />;
      let article2image2;
      let article2image3;
      let article2image4;
      let article2body2;
      let article2image5;
      let article2image6;
      let article2image7;
      let article2body3;
      let article2image8;
      let article2image9;
      let article2image10;
      if (article2.body2) article2body2 = article2.body2.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article2.body3) article2body3 = article2.body3.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article2.image2) article2image2 = <ModalImg src={article2.image2.value.main.url} alt={article2.image2.value.alt} />;
      if (article2.image3) article2image3 = <ModalImg src={article2.image3.value.main.url} alt={article2.image3.value.alt} />;
      if (article2.image4) article2image4 = <ModalImg src={article2.image4.value.main.url} alt={article2.image4.value.alt} />;
      if (article2.image5) article2image5 = <ModalImg src={article2.image5.value.main.url} alt={article2.image5.value.alt} />;
      if (article2.image6) article2image6 = <ModalImg src={article2.image6.value.main.url} alt={article2.image6.value.alt} />;
      if (article2.image7) article2image7 = <ModalImg src={article2.image7.value.main.url} alt={article2.image7.value.alt} />;
      if (article2.image8) article2image8 = <ModalImg src={article2.image8.value.main.url} alt={article2.image8.value.alt} />;
      if (article2.image9) article2image9 = <ModalImg src={article2.image9.value.main.url} alt={article2.image9.value.alt} />;
      if (article2.image10) article2image10 = <ModalImg src={article2.image10.value.main.url} alt={article2.image10.value.alt} />;
      let article3image2;
      let article3image3;
      let article3image4;
      let article3body2;
      let article3image5;
      let article3image6;
      let article3image7;
      let article3body3;
      let article3image8;
      let article3image9;
      let article3image10;
      if (article3.body2) article3body2 = article3.body2.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article3.body3) article3body3 = article3.body3.value.map((value, idx, values) => (
              <ModalText>{value.text}</ModalText>
            ))
      if (article3.image2) article3image2 = <ModalImg src={article3.image2.value.main.url} alt={article3.image2.value.alt} />;
      if (article3.image3) article3image3 = <ModalImg src={article3.image3.value.main.url} alt={article3.image3.value.alt} />;
      if (article3.image4) article3image4 = <ModalImg src={article3.image4.value.main.url} alt={article3.image4.value.alt} />;
      if (article3.image5) article3image5 = <ModalImg src={article3.image5.value.main.url} alt={article3.image5.value.alt} />;
      if (article3.image6) article3image6 = <ModalImg src={article3.image6.value.main.url} alt={article3.image6.value.alt} />;
      if (article3.image7) article3image7 = <ModalImg src={article3.image7.value.main.url} alt={article3.image7.value.alt} />;
      if (article3.image8) article3image8 = <ModalImg src={article3.image8.value.main.url} alt={article3.image8.value.alt} />;
      if (article3.image9) article3image9 = <ModalImg src={article3.image9.value.main.url} alt={article3.image9.value.alt} />;
      if (article3.image10) article3image10 = <ModalImg src={article3.image10.value.main.url} alt={article3.image10.value.alt} />;
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
      return (
        <div id="blog" style={{ width: '100%', paddingTop: '8vh' }}>
          <Helmet>
            <title>Sang Bleu London</title>
            <meta name="description" content="" />
          </Helmet>

          <div style={{ margin: '1em auto' }}>

            <div>
              <div onClick={this.openModal1} style={{ textDecoration: 'none' }}>
                <StyledImg src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
                <PostDate>
                  {article1.date.value}
                </PostDate>
                <Title>
                  {article1.title.value[0].text}
                </Title>
                <Subtitle>
                  {article1.subhead.value}
                </Subtitle>
              </div>
            </div>


            <div>
              <div onClick={this.openModal2} style={{ textDecoration: 'none' }}>
                <StyledImg src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
                <PostDate>
                  {article2.date.value}
                </PostDate>
                <Title>
                  {article2.title.value[0].text}
                </Title>
                <Subtitle>
                  {article2.subhead.value}
                </Subtitle>
              </div>
            </div>

            <div>
              <div onClick={this.openModal3} style={{ textDecoration: 'none' }}>
                <StyledImg src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
                <PostDate>
                  {article3.date.value}
                </PostDate>
                <Title>
                  {article3.title.value[0].text}
                </Title>
                <Subtitle>
                  {article3.subhead.value}
                </Subtitle>
              </div>
            </div>

          </div>

          {link}

          <Modal
            visible={this.state.modal1IsOpen}
            onCancel={this.closeModal1}
            title={null}
            footer={null}
            style={{ width: '100%', margin: '0 auto' }}
          >
            <div style={{ width: '100%', position: 'relative', paddingBottom: '10vh' }}>
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
                {article1.date.value}
              </ModalDate>
              <ModalTitle>
                {article1.title.value[0].text}
              </ModalTitle>
              <ModalImg src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
              {article1.body.value.map((value, idx, values) => (
                <ModalText>{value.text}</ModalText>
              ))}
              {article1image2}
              {article1image3}
              {article1image4}
              {article1body2}
              {article1image5}
              {article1image6}
              {article1image7}
              {article1body3}
              {article1image8}
              {article1image9}
              {article1image10}
            </div>
          </Modal>

          <Modal
            visible={this.state.modal2IsOpen}
            onCancel={this.closeModal2}
            title={null}
            footer={null}
            style={{ width: '75%', margin: '0 auto' }}
          >
            <div style={{ width: '100%', position: 'relative', paddingBottom: '10vh' }}>
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
                {article2.date.value}
              </ModalDate>
              <ModalTitle>
                {article2.title.value[0].text}
              </ModalTitle>
              <ModalImg src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
              {article2.body.value.map((value, idx, values) => (
                              <ModalText>{value.text}</ModalText>
                            ))}
              {article2image2}
              {article2image3}
              {article2image4}
              {article2body2}
              {article2image5}
              {article2image6}
              {article2image7}
              {article2body3}
              {article2image8}
              {article2image9}
              {article2image10}

            </div>
          </Modal>

          <Modal
            visible={this.state.modal3IsOpen}
            onCancel={this.closeModal3}
            title={null}
            footer={null}
            style={{ width: '75%', margin: '0 auto' }}
          >
            <div style={{ width: '100%', position: 'relative', paddingBottom: '10vh' }}>
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
                {article3.date.value}
              </ModalDate>
              <ModalTitle>
                {article3.title.value[0].text}
              </ModalTitle>
              <ModalImg src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
              {article3.body.value.map((value, idx, values) => (
                              <ModalText>{value.text}</ModalText>
                            ))}
              {article3image2}
              {article3image3}
              {article3image4}
              {article3body2}
              {article3image5}
              {article3image6}
              {article3image7}
              {article3body3}
              {article3image8}
              {article3image9}
              {article3image10}

            </div>
          </Modal>
          <div
            style={{
              position: 'relative', height: '15vh', width: '100%', bottom: '0'
            }}
          >
            <FooterMobile />
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
