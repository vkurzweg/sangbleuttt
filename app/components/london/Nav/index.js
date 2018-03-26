/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import { Image } from 'cloudinary-react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { browserHistory } from 'react-router';


const Brand = styled.h1`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: 0.16px;
  line-height: 30px;
  display: inline;
  float: left;
  padding-left: 12vw;
  padding-top: 1vw;
  position: relative;
  z-index: 1;
  color: black;
`;


class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const brand =
        <Brand><a href="#top" style={{ color: 'black', textDecoration: 'none', position: 'relative', zIndex: '1' }}>Sang Bleu London</a></Brand>
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: '1', top: '0' }}>
        <AppBar
            title={brand}
            className="appbar"
            style={{ backgroundColor: 'transparent', position: 'relative' }}
            iconElementRight={<Image className="logo-london" cloudName="kurzweg" publicId="sangbleu/logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />}
            iconStyleRight={{ display: 'inline', position: 'absolute', right: '0', marginRight: '1vw'}}
            iconStyleLeft={{ display: 'none'}}
            zDepth={0}
          />
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
