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


export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = { docs: [] }
  }


  componentDidMount() {
    const apiEndpoint = "https://sangbleu-test.cdn.prismic.io/api";
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
    let article1 = documents[0].data.article_w_snippet;
    let article2 = documents[1].data.article_w_snippet;
    let article3 = documents[2].data.article_w_snippet;
    return (
      <div>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>
        <div className="container" style={{ marginTop: '15%' }}>
          <div className="row">
            <div className="col-sm-8">
              <h3 style={{ textAlign: 'center' }}>{article1.title.value[0].text}</h3>
              <img src={article1.image.value.main.url} style={{ width: '100%' }} />
              {article1.snippet_summary.value}
            </div>
            <div className="col-sm-4">
              <div>
                <h3 style={{ textAlign: 'center' }}>{article2.title.value[0].text}</h3>
                <img src={article2.image.value.main.url} style={{ width: '75%', display: 'block', margin: '0 auto' }}/>
              </div>
              <div>
                <h3 style={{ textAlign: 'center' }}>{article3.title.value[0].text}</h3>
                <img src={article3.image.value.main.url} style={{ width: '75%', display: 'block', margin: '0 auto' }} />
              </div>
            </div>
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

// { documents.map( (document, idx, documents) => {
//   let article = document.data.article;
//   console.log(article)
//   return (
//     <div>
//       <h3 key={idx}>{article.title.value[0].text}</h3>
//       <img key={idx+1} src={article.image.value.main.url} />
//       {article.body.value[0].text}
//     </div>
//  )
// })}
