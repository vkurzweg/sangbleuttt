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
import PrismicDOM from 'prismic-dom';
import {Link, RichText, Date} from 'prismic-reactjs';
import styled from 'styled-components';
import Modal from 'antd/lib/modal';
import Icon from 'antd/lib/icon';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHover from 'react-hover';
import Footer from 'components/london/Footer';

const Title = styled.h3`
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 0 auto;
  font-family: SangBleu;
  text-align: center;
  font-size: 45px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-family: SuisseLight;
  font-size: 32px;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 2px;
`;

const PostDate = styled.h5`
  display: inline;
  padding-right: 3%;
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 2px;
  position: absolute;
  margin-left: 20%;
  bottom: 0;
`;

const StyledImg = styled.img`
    padding: 1em;
    padding-top: 3em;
    width: 55%;
    display: block;
    margin: 0 auto;
`;

const Close = styled.div`
  position: absolute;
  margin-left: 50vw;
  margin-top: -5vh;
  font-size: 2vw;
  color: black;
`;

const ModalTitle = styled.h3`
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align: center;
  font-family: SangBleu;
  font-size: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const ModalImg = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  padding: 1em;
  max-height: 100%;
`;

const ModalText = styled.p`
  margin-top: 5vh;
  padding: 1%;
  font-size: 15px;
  font-family: SuisseRegular;
  line-height: 2em;
  width: 100%;
`;

const ModalDate = styled.h5`
  font-family: SuisseLight;
  font-size: 12px;
  margin-top: 5vh;
  text-align: center;
  letter-spacing: 2px;
`;

const options = {
  followCursor:false,
}

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      docs: [],
      modal1IsOpen: false,
      modal2IsOpen: false,
      modal3IsOpen: false
    }
    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
  }

  openModal1() {
    console.log('clicked');
    this.setState({modal1IsOpen: true});
  }

  closeModal1() {
    console.log('clicked')
    this.setState({modal1IsOpen: false});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  openModal3() {
    this.setState({modal3IsOpen: true});
  }

  closeModal3() {
    this.setState({modal3IsOpen: false});
  }

  componentDidMount() {
    const apiEndpoint = "https://sb-london-blog.prismic.io/api";
    Prismic.getApi(apiEndpoint).then(function(api) {
      return api.query(""); // An empty query will return all the documents
    }).then(function(response) {
      console.log("Documents: ", response.results);
      const documents = response.results;
      this.setState({docs: documents})
    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    });
  }

  render() {
    if (this.state.docs.length > 0) {
      let documents = this.state.docs
      let article1 = documents[0].data.blog_post;
      let article2 = documents[1].data.blog_post;
      let article3 = documents[2].data.blog_post;
      let article1image2;
      let article1image3;
      let article1image4;
      article1.image2 ? article1image2 = <ModalImg src={article1.image2.value.main.url} alt={article1.image2.value.alt} /> : article1image2;
      article1.image3 ? article1image3 = <ModalImg src={article1.image3.value.main.url} alt={article1.image3.value.alt} /> : article1image3;
      article1.image4 ? article1image4 = <ModalImg src={article1.image4.value.main.url} alt={article1.image4.value.alt} /> : article1image4;
      let article2image2;
      let article2image3;
      let article2image4;
      article2.image2 ? article2image2 = <ModalImg src={article2.image2.value.main.url} alt={article2.image2.value.alt} /> : article2image2;
      article2.image3 ? article2image3 = <ModalImg src={article2.image3.value.main.url} alt={article2.image3.value.alt} /> : article2image3;
      article2.image4 ? article2image4 = <ModalImg src={article2.image4.value.main.url} alt={article2.image4.value.alt} /> : article2image4;
      let article3image2;
      let article3image3;
      let article3image4;
      article3.image2 ? article3image2 = <ModalImg src={article3.image2.value.main.url} alt={article3.image2.value.alt} /> : article3image2;
      article3.image3 ? article3image3 = <ModalImg src={article3.image3.value.main.url} alt={article3.image3.value.alt} /> : article3image3;
      article3.image4 ? article3image4 = <ModalImg src={article3.image4.value.main.url} alt={article3.image4.value.alt} /> : article3image4;
      let articlesNum = this.state.docs.length;
      let link;
      articlesNum > 3 ? link = <a href="#" style={{ fontStyle: 'underline', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>See all articles</a> : link;
    return (
      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <Helmet>
          <title>Sang Bleu London Blog</title>
          <meta name="description" content="News and features published by the Sang Bleu tattoo studio in London." />
        </Helmet>

        <div className='articles-container' style={{ margin: '1em auto', paddingTop: '5vh', paddingBottom: '100vh' }}>
          <h3 style={{ fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '23pt', letterSpacing: '1px', marginLeft: '4vw' }}>blog</h3>
            <div className="london-article-container">
              <ReactHover
                options={options}>
                <ReactHover.Trigger type='trigger'>
                  <div className='hover-article article1' style={{ marginTop: '8vh' }}>
                    <a className="article-link" onClick={this.openModal1} href="#" style={{ textDecoration: 'none', width: '70%', margin: '0 auto' }}>
                      <div style={{ position: 'relative' }}>
                        <PostDate>
                          {article1.date.value}
                        </PostDate>
                        <Title className="article-title">
                          {article1.title.value[0].text}
                        </Title>
                      </div>
                      <Subtitle className="article-title">
                        {article1.subhead.value}
                      </Subtitle>
                    </a>
                  </div>
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover' style={{ width: '100%', margin: '0 auto' }}>
                  <div className="hover-container">
                    <img className="hover-article-image" src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
                  </div>
                </ReactHover.Hover>
              </ReactHover>
            </div>

          <div className="london-article-container">
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div className='hover-article article2' style={{ marginTop: '38vh' }}>
                  <a className="article-link" onClick={this.openModal2} href="#" style={{ textDecoration: 'none' }}>
                    <div style={{ position: 'relative' }}>
                      <PostDate>
                        {article2.date.value}
                      </PostDate>
                      <Title className="article-title">
                        {article2.title.value[0].text}
                      </Title>
                    </div>
                    <Subtitle className="article-title">
                      {article2.subhead.value}
                    </Subtitle>
                  </a>
                </div>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover' style={{ width: '100%', margin: '0 auto' }}>
                <div className="hover-container">
                  <img className="hover-article-image" src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>

          <div className="london-article-container">
            <ReactHover
              options={options}>
              <ReactHover.Trigger type='trigger'>
                <div className='hover-article article3' style={{ marginTop: '68vh' }}>

                  <a className="article-link" onClick={this.openModal3} href="#" style={{ textDecoration: 'none' }}>
                    <div style={{ position: 'relative' }}>
                      <PostDate>
                        {article3.date.value}
                      </PostDate>
                      <Title className="article-title">
                        {article3.title.value[0].text}
                      </Title>
                    </div>
                    <Subtitle className="article-title">
                      {article3.subhead.value}
                    </Subtitle>
                  </a>
                </div>
              </ReactHover.Trigger>
              <ReactHover.Hover type='hover' style={{ width: '100%', margin: '0 auto' }}>
                <div className="hover-container">
                  <img className="hover-article-image" src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
                </div>
              </ReactHover.Hover>
            </ReactHover>
          </div>
        </div>

          {link}


        <Modal
          visible={this.state.modal1IsOpen}
          onCancel={this.closeModal1}
          title={null}
          footer={null}
          style={{ width: '75%', margin: '0 auto'}}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <ModalDate>
              {article1.date.value}
            </ModalDate>
            <ModalTitle>
              {article1.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <ModalText>{article1.body.value[0].text}</ModalText>
            {article1image2}
            {article1image3}
            {article1image4}
          </div>
        </Modal>

        <Modal
          visible={this.state.modal2IsOpen}
          onCancel={this.closeModal2}
          title={null}
          footer={null}
          style={{ width: '75%', margin: '0 auto'}}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <ModalDate>
              {article2.date.value}
            </ModalDate>
            <ModalTitle>
              {article2.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article2.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <ModalText>{article2.body.value[0].text}</ModalText>
            {article2image2}
            {article2image3}
            {article2image4}
          </div>
        </Modal>

        <Modal
          visible={this.state.modal3IsOpen}
          onCancel={this.closeModal3}
          title={null}
          footer={null}
          style={{ width: '75%', margin: '0 auto'}}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <ModalDate>
              {article3.date.value}
            </ModalDate>
            <ModalTitle>
              {article3.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
            <ModalText>{article3.body.value[0].text}</ModalText>
            {article3image2}
            {article3image3}
            {article3image4}
          </div>
        </Modal>
        <div style={{ position: 'relative', height: '15vh', width: '100%', bottom: '0' }}>
        <Footer />
        </div>
      </div>
    )} else {
      return (
        <p>Loading...</p>
      )
    }
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

export default compose(
  withConnect,
)(ArticlesContainer);

// <img src={article1.image.value.main.url} style={{ width: '100%' }} />
// <img src={article2.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }}/>
// <img src={article3.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }} />
