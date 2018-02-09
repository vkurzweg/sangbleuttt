/**
*
* Calendar
*
*/

import React from 'react';
// import styled from 'styled-components';
import Calendar from 'react-calendar';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import {Link, RichText, Date} from 'prismic-reactjs';



class CalendarLondon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = { docs: [] }
  }


  componentDidMount() {
    const apiEndpoint = "https://sb-london-calendar.prismic.io/api";
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
    return (
      <div>
        <Calendar
          style={{ display: 'block', width: '100%', margin: '0 auto' }}
        />
      </div>
    );
  }
}

CalendarLondon.propTypes = {

};

export default CalendarLondon;
