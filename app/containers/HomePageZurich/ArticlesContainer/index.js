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
  width: 90%;
  display: block;
  margin: 0 auto;
  opacity: .9;
  margin-bottom: 10vh;
  &:hover{
    opacity: 1;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: -2vh;
`;

const StyledImage = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  display:block;
  margin: 0 auto;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 53vw;
  height: 100vh;
  border: none;
  border-radius:4px;
  top: 0;
  overflow: hidden;
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
    let article4 = documents[3].data.blog_post;
    let articles = [article1, article2, article3, article4]
    return (
      <div className='blog-container'>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>
          <div className="blog-wrapper" onClick={this.props.handleDismissPost}>
          { articles.map((article, idx, articles) => (
              <div key={idx} className='blog-hover-image'>
                <ReactHover
                  options={options}>
                  <ReactHover.Trigger type='trigger'>
                    <Article onClick={this.props.handleViewPost} className='titles-container' style={{ marginTop: '5vh' }}>
                      <Title>
                        {article.title.value[0].text}
                      </Title>
                      <PostDate>
                        {article.date.value}
                      </PostDate>
                    </Article>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <ImageContainer>
                      <StyledImage style={{ background: `url(${article.main_image.value.main.url}) no-repeat center`}} alt={article.main_image.value.main.alt}>
                        <Image className='zurich-logo' cloudName="kurzweg" publicId="zurich_white" alt="sang bleu zurich" quality="auto" crop="scale" responsive />
                      </StyledImage>
                    </ImageContainer>
                  </ReactHover.Hover>
                </ReactHover>
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
