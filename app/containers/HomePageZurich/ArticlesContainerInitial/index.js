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
  opacity: .9;
`;

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 40px;
  letter-spacing: -1.99px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: -4vh;
`;

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = { docs: [] }
  }


  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'dynamic_post'),).then((response) => {
      console.log('Documents: ', response.results);
      const documents = response.results;
      return this.setState({ docs: documents });
    }));
  }

  render() {
    const options = {
      followCursor:false,
    }
    if (this.state.docs.length > 0) {
    let documents = this.state.docs
    let article1 = documents[0].data.dynamic_post;
    let article2 = documents[1].data.dynamic_post;
    let article3 = documents[2].data.dynamic_post;
    let article4 = documents[3].data.dynamic_post;
    let articles = [article1, article2, article3, article4]
    return (
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Helmet>
          <title>Sang Bleu Zurich</title>
          <meta name="description" content="Artist portfolios, news, and upcoming events at the Sang Bleu tattoo studio in Zurich, Switzerland." />
        </Helmet>
          <div style={{ paddingTop: '3vh' }}>
          { articles.map((article, idx, articles) => (
            <div>
              <Article style={{ marginTop: '7vh' }}>
                <Title>
                  {article.title.value[0].text}
                </Title>
                <PostDate>
                  {article.date.value}
                </PostDate>
              </Article>
            </div>
            ))}
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
