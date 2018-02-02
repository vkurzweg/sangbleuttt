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
        <div className="container-fluid" style={{ margin: '1em auto', marginTop: '15%' }}>
          <div className="row" style={{ margin: '1em auto', maxHeight: '600px' }}>
            <div className="col-sm-9">
              <h3 style={{ textAlign: 'center', fontFamily: 'Helvetica', fontWeight: 'bold', color: '#FAFAFA', fontSize: '56px', textTransform: 'uppercase', position: 'absolute', bottom: '0', paddingBottom: '15%', paddingLeft: '5%' }}>{article1.title.value[0].text}</h3>
              <div style={{ position: 'absolute', bottom: '0', paddingBottom: '7%', color: '#FAFAFA', fontSize: '30px', paddingLeft: '5%' }}>{article1.snippet_summary.value}</div>
              <img src={article1.image.value.main.url} style={{ width: '100%' }} />
            </div>
            <div className="col-sm-3">
              <div>
                <h3 style={{ textAlign: 'center', fontFamily: 'Helvetica', fontWeight: 'normal', textTransform: 'uppercase', position: 'absolute', fontWeight: 'bold', color: '#FAFAFA', fontSize: '38px', paddingTop: '5%' }}>{article2.title.value[0].text}</h3>
                <img src={article2.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }}/>
              </div>
              <div>
                <h3 style={{ textAlign: 'center', fontFamily: 'Helvetica', fontWeight: 'normal', textTransform: 'uppercase', position: 'absolute', fontWeight: 'bold', color: '#FAFAFA', fontSize: '38px', paddingTop: '70%' }}>{article3.title.value[0].text}</h3>
                <img src={article3.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }} />
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
