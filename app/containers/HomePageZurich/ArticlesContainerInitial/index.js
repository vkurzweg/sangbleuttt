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
import styled from 'styled-components';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import {Link, RichText, Date} from 'prismic-reactjs';
import Icon from 'antd/lib/icon';
import ReactHover from 'react-hover';
import { Image } from 'cloudinary-react';


const Article = styled.div`
  width: 100%;
  opacity: .8;
`;

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 2vw;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
`;

const Subtitle = styled.h4`
  text-align: center;
  font-family: SuisseCond;
  padding-bottom: 10%;
  color: #FAFAFA;
  fontSize: 2vw;
  padding-left: 5%;
`;

const StyledImage = styled.div`
  position: absolute;
  display: inline-block;
  height: 100vh;
  width: 50vw;
  top: 0; left: 0;
  margin-left: -50vw;
  margin-top: -50vh;
`;

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50vw;
  height: 100vh;
  opacity: .9;
  position: relative;
`

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = { docs: [] }
  }


  componentDidMount() {
    const apiEndpoint = "https://sb-zurich-blog.prismic.io/api";
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
    const options = {
      followCursor:false,
    }
    if (this.state.docs.length > 0) {
    let documents = this.state.docs
    let article1 = documents[0].data.blog_post;
    let article2 = documents[1].data.blog_post;
    let article3 = documents[2].data.blog_post;
    return (
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>
          <Icon type="close" style={{ float: 'left', color: 'white', fontSize: '2vw', left: '0', marginTop: '5vh', opacity: '.7', paddingLeft: '5%' }} />
          <div style={{ paddingTop: '18vh' }}>
            <div>
              <Article>
                <Title>
                  {article1.title.value[0].text}
                </Title>
                <Subtitle>
                  {article1.subtitle.value}
                </Subtitle>
              </Article>
            </div>

            <div>
              <Article>
                <Title>
                  {article2.title.value[0].text}
                </Title>
                <Subtitle>
                  {article2.subtitle.value}
                </Subtitle>
              </Article>
            </div>

            <div>
              <Article>
                <Title>
                  {article3.title.value[0].text}
                </Title>
                <Subtitle>
                  {article3.subtitle.value}
                </Subtitle>
              </Article>
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
