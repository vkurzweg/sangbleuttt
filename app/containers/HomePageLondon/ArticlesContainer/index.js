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
import Modal from 'react-modal';
import Icon from 'antd/lib/icon';


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
    article1.image2 ? article1image2 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article1.image2.value.main.url} alt={article1.image2.value.alt} /> : article1image2;
    article1.image3 ? article1image3 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article1.image3.value.main.url} alt={article1.image3.value.alt} /> : article1image3;
    article1.image4 ? article1image4 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article1.image4.value.main.url} alt={article1.image4.value.alt} /> : article1image4;
    let article2image2;
    let article2image3;
    let article2image4;
    article2.image2 ? article2image2 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article2.image2.value.main.url} alt={article2.image2.value.alt} /> : article2image2;
    article2.image3 ? article2image3 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article2.image3.value.main.url} alt={article2.image3.value.alt} /> : article2image3;
    article2.image4 ? article2image4 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article2.image4.value.main.url} alt={article2.image4.value.alt} /> : article2image4;
    let article3image2;
    let article3image3;
    let article3image4;
    article3.image2 ? article3image2 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article3.image2.value.main.url} alt={article3.image2.value.alt} /> : article3image2;
    article3.image3 ? article3image3 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article3.image3.value.main.url} alt={article3.image3.value.alt} /> : article3image3;
    article3.image4 ? article3image4 = <img style={{ padding: '1em', paddingTop: '3em', width: '55%', display: 'block', margin: '0 auto'}} src={article3.image4.value.main.url} alt={article3.image4.value.alt} /> : article3image4;
    let articlesNum = this.state.docs.length;
    let link;
    articlesNum > 3 ? link = <a href="#" style={{ textDecoration: 'none', cursor: 'pointer' }}>See all articles</a> : link;

    return (
      <div>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>

        <div style={{ margin: '1em auto', marginTop: '5%' }}>
          <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>blog</h3>

          <a className="article-link" onClick={this.openModal1} href="#" style={{ textDecoration: 'none', color: 'black' }}>
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article1.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article1.subhead.value}
            </div>
            <img className="article-image" src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
          </a>

          <a className="article-link" onClick={this.openModal2} href="#" style={{ textDecoration: 'none', color: 'black' }}>
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article2.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article2.subhead.value}
            </div>
            <img className="article-image" src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
          </a>

          <a className="article-link" onClick={this.openModal3} href="#" style={{ textDecoration: 'none', color: 'black' }}>
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article3.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article3.subhead.value}
            </div>
            <img className="article-image" src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
          </a>
        </div>

        {link}

        <Modal
          isOpen={this.state.modal1IsOpen}
          onRequestClose={this.closeModal1}
          contentLabel={article1.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '70%',
                      margin: '0 auto',
                      marginTop: '5%',
                      overflow: 'scroll',
                    },
                content: {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '57%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                },
              }}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <div onClick={this.closeModal1} style={{ position: 'absolute', marginLeft: '70%', marginTop: '2%' }}>
              <Icon type="close" />
            </div>
            <h3 className="article-title" style={{ marginTop: '5%', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article1.title.value[0].text}
            </h3>
            <img style={{ width: '55%', display: 'block', margin: '0 auto', padding: '1em'}} src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <p style={{ padding: '2em' }}>{article1.body.value[0].text}</p>
            {article1image2}
            {article1image3}
            {article1image4}
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal2IsOpen}
          onRequestClose={this.closeModal2}
          contentLabel={article2.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '70%',
                      margin: '0 auto',
                      marginTop: '5%',
                      overflow: 'scroll',
                    },
                content: {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '57%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                },
              }}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <div onClick={this.closeModal2} style={{ position: 'absolute', marginLeft: '70%', marginTop: '2%' }}>
              <Icon type="close" />
            </div>
            <h3 className="article-title" style={{ marginTop: '5%', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article2.title.value[0].text}
            </h3>
            <img style={{ width: '55%', display: 'block', margin: '0 auto', padding: '1em'}} src={article2.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <p style={{ padding: '2em' }}>{article2.body.value[0].text}</p>
            {article2image2}
            {article2image3}
            {article2image4}
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal3IsOpen}
          onRequestClose={this.closeModal3}
          contentLabel={article3.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '70%',
                      margin: '0 auto',
                      marginTop: '5%',
                      overflow: 'scroll',
                      zIndex: '100'
                    },
                content: {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '57%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                  zIndex: '100'
                },
              }}
          >
          <div style={{ width: '75%', margin: '0 auto' }}>
            <div onClick={this.closeModal3} style={{ position: 'absolute', marginLeft: '70%', marginTop: '2%' }}>
              <Icon type="close" />
            </div>
            <h3 className="article-title" style={{ marginTop: '5%', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article3.title.value[0].text}
            </h3>
            <img style={{ width: '55%', display: 'block', margin: '0 auto', padding: '1em'}} src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
            <p style={{ padding: '2em' }}>{article3.body.value[0].text}</p>
            {article3image2}
            {article3image3}
            {article3image4}
          </div>
        </Modal>

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
