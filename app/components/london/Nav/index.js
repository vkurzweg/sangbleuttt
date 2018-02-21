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

const SubMenu = Menu.SubMenu;

const A = styled.a`
  font-family: 'Poiret One';
  text-transform: uppercase;
  font-size: 18px;
  vertical-align: sub;
  letter-spacing: 2px;
  color: #F5F5F5 !important;
  font-weight: bold;
  &:hover {
    color: #24A5DA;
    text-decoration: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-family: Helvetica;
  color: #F5F5F5;
  background-color: #000000;
  letter-spacing: 2px;
  padding: 2%;
  color: #F5F5F5;
  &:hover {
    color: #3D8EE2;
  }
`;

const items = [
  {
    name: 'SANG BLEU ZURICH',
    url: '/zurich',
  },
  {
    name: 'sangbleu.com',
    url: 'http://www.sangbleu.com',
  }
];

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
  }
};

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      blue: false,
      open: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    }

  handleToggle() {
     this.setState({ open: !this.state.open });
   }

 handleClose(url) {
   this.setState({ open: false });
   browserHistory.push(url);
 }


  handleScroll(event) {
    let offset = 100;
    var scrollTop = window.pageYOffset;
    if (scrollTop > offset){
        this.setState({
          blue: true
        });
      } else {
        this.setState({
          blue: false
        })
      }
    }

  render() {
    let displayBlack = 'block';
    let displayBlue = 'none';
    this.state.blue ? displayBlue = 'block' : displayBlue;
    this.state.blue ? displayBlack = 'none' : displayBlack;
    let display = 'none';
    (this.state.showMenu) ? display = 'block' : display = 'none';
    const brand =
      <div>
          <h1 style={{ textAlign: 'center', display: displayBlack, overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.3vw', letterSpacing: '1px', padding: '1%', marginBottom: '0' }}>Sang Bleu London</h1>
          <h1 style={{ textAlign: 'center', display: displayBlue, color: '#3D8EE2', overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.3vw', letterSpacing: '1px', padding: '1%', marginBottom: '0' }}><span style={{ color: 'black' }}>Sang Bleu</span> London</h1>
      </div>
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: '1', top: '0' }}>
        <AppBar
            title={brand}
            style={{ width: '100%', backgroundColor: 'white' }}
            iconElementLeft={<IconButton><NavigationMenu color={'black'} /></IconButton>}
            onLeftIconButtonTouchTap={this.handleToggle}
            zDepth={0}
          />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          containerStyle={style.bg}
        >
          <div style={{ paddingTop: '25%' }}>
          {items.map((item, idx) => {
            return (
              <StyledMenuItem key={idx} onTouchTap={this.handleClose.bind(null, item.url)} style={{ color: '#F5F5F5', backgroundColor: '#000000', fontFamily: 'Helvetica', letterSpacing: '2px', padding: '2%' }}>{item.name}</StyledMenuItem>
            );
          })}
          </div>
        </Drawer>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
