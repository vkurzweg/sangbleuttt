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
  font-size: 23pt;
  letter-spacing: 0.16;
  margin-left: 12vw;
  padding-top: 1vw;
`;


class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const brand =
        <Brand>Sang Bleu London</Brand>
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: '1', top: '0' }}>
        <AppBar
            title={brand}
            className="appbar"
            style={{ width: '100%', backgroundColor: 'transparent' }}
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

// Hamburger menu:

// const SubMenu = Menu.SubMenu;

// const A = styled.a`
//   font-family: 'Poiret One';
//   text-transform: uppercase;
//   font-size: 18px;
//   vertical-align: sub;
//   letter-spacing: 2px;
//   color: #F5F5F5 !important;
//   font-weight: bold;
//   &:hover {
//     color: #24A5DA;
//     text-decoration: none;
//   }
// `;

// const StyledMenuItem = styled(MenuItem)`
//   font-family: Helvetica;
//   color: #F5F5F5;
//   background-color: #000000;
//   letter-spacing: 2px;
//   padding: 2%;
//   color: #F5F5F5;
//   &:hover {
//     color: #3D8EE2;
//   }
// `;

// const items = [
//   {
//     name: 'SANG BLEU ZURICH',
//     url: '/zurich',
//   },
//   {
//     name: 'sangbleu.com',
//     url: 'http://www.sangbleu.com',
//   }
// ];

// const style = {
//   bg: {
//     backgroundColor: '#000000',
//     color: '#F5F5F5',
//   }
// };

//  constructor(props){
//    super(props);
//    this.state = {
//      open: false,
//    }
//    this.handleToggle = this.handleToggle.bind(this);
//    this.handleClose = this.handleClose.bind(this);
//    }

//  handleToggle() {
//     this.setState({ open: !this.state.open });
//   }

// handleClose(url) {
//   this.setState({ open: false });
//   browserHistory.push(url);
// }


//  handleScroll(event) {
//    let offset = 100;
//    var scrollTop = window.pageYOffset;
//    if (scrollTop > offset){
//        this.setState({
//          blue: true
//        });
//      } else {
//        this.setState({
//          blue: false
//        })
//      }
//    }

// let display = 'none';
// (this.state.showMenu) ? display = 'block' : display = 'none';


// iconElementLeft={<IconButton><NavigationMenu color={'black'} /></IconButton>}
// onLeftIconButtonTouchTap={this.handleToggle}

// <Drawer
//   docked={false}
//   width={250}
//   open={this.state.open}
//   onRequestChange={(open) => this.setState({ open })}
//   containerStyle={style.bg}
// >
//   <div style={{ paddingTop: '25%' }}>
//   {items.map((item, idx) => {
//     return (
//       <StyledMenuItem key={idx} onTouchTap={this.handleClose.bind(null, item.url)} style={{ color: '#F5F5F5', backgroundColor: '#000000', fontFamily: 'Helvetica', letterSpacing: '2px', padding: '2%' }}>{item.name}</StyledMenuItem>
//     );
//   })}
//   </div>
// </Drawer>
