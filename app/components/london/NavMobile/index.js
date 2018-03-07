/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';


const Brand = styled.h1`
  margin-left: 31vw;
  font-family: SuisseIntlSemiBold;
  text-align: right;
  position: fixed;
  color: black;
  overflow: visible;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 2%;
  margin-top: 10px;
  z-index: 100;
`;

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const brand =
      <Brand>Sang Bleu London</Brand>;
    return (
      <div
        style={{
          position: 'fixed', width: '100%', zIndex: '100', top: '0'
        }}
      >
        <AppBar
          title={brand}
          style={{ position: 'fixed', width: '100%', backgroundColor: 'transparent' }}
          iconElementLeft={<div style={{ position: 'absolute' }}></div>}
          zDepth={0}
        />
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;

// Hamburger menu and scroll effect:

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

// constructor(props){
//    super(props);
//    this.state = {
//      blue: false,
//      open: false,
//    }
//    this.handleScroll = this.handleScroll.bind(this);
//    this.handleToggle = this.handleToggle.bind(this);
//    this.handleClose = this.handleClose.bind(this);
//    }

//  componentDidMount() {
//    window.addEventListener('scroll', this.handleScroll);
//    }

//  componentWillUnmount() {
//    window.removeEventListener('scroll', this.handleScroll);
//    }

//  handleToggle() {
//     this.setState({ open: !this.state.open });
//   }

// handleClose(url) {
//   this.setState({ open: false });
//   browserHistory.push(url);
// }


//  handleScroll(event) {
//    let offset = 50;
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

// iconElementLeft={<Image className='logo-london' style={{ width: '6vw', height: 'auto', display: 'block', margin: '0 auto', marginLeft: '2vw' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />}
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

