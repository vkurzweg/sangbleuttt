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


export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = { docs: [] }
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
    return (
      <div>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>

        <div style={{ margin: '1em auto', marginTop: '5%' }}>

          <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>blog</h3>

          <div className="article-link">
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article1.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article1.subhead.value}
            </div>
            <img className="article-image" src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
          </div>

          <div className="article-link">
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article2.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article2.subhead.value}
            </div>
            <img className="article-image" src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
          </div>

          <div className="article-link">
            <h3 className="article-title" style={{ marginBottom: '0', textAlign: 'center', fontFamily: 'Helvetica', fontSize: '36px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              {article3.title.value[0].text}
            </h3>
            <div className="article-title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '5%', letterSpacing: '2px' }}>
              {article3.subhead.value}
            </div>
            <img className="article-image" src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
          </div>

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

