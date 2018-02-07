/**
*
* InstaGrid
*
*/

import React from 'react';
import styled from 'styled-components';
import _ from "lodash";
import Instafeed from 'react-instafeed';
import { Responsive as ResponsiveReactGridLayout } from 'react-grid-layout';
import { WidthProvider } from 'react-grid-layout';

var ResponsiveGrid = ResponsiveReactGridLayout;
ResponsiveGrid = WidthProvider(ResponsiveGrid);

const artists = [
  {
    name: 'Maxime Plescia-Buchi',
    userId: '1789183639',
  }, {
    name: 'Dani Queipo',
    userId: '17916905',
  }, {
    name: 'Antoine Larrey',
    userId: '7838019'
  }, {
    name: 'Dan Crowe',
    userId: '4357811'
  }, {
    name: 'Ruby Quilter',
    userId: '11348723'
  }, {
    name: 'Eszter David',
    userId: '273712202'
  }, {
    name: 'Javier Rodriguez',
    userId: '14376307'
  }, {
    name: 'Malwina',
    userId: '975175955'
  }, {
    name: 'Tattoosforyourenemies',
    userId: '1079415228'
  }, {
    name: 'Wolfgang',
    userId: '1461855489'
  }, {
    name: 'Frederico Rabelo',
    userId: '361861981'
  }, {
    name: 'Caio Pineiro',
    userId: '188422421'
  }, {
    name: 'Frank Carter',
    userId: '8205346'
  }
]

class InstaGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    className: "layout",
    items: 13,
    rowHeight: 30,
    onLayoutChange: function() {},
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
        this.state = { layout };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.generateLayout = this.generateLayout.bind(this);
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }


  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }


  render() {

    const instafeedTarget = 'instafeed';

    const layouts = [
      {i: 'a', x: 0, y: 0, w: 2, h: 5},
      {i: 'b', x: 2, y: 0, w: 2, h: 5, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 2, h: 4},
      {i: 'd', x: 6, y: 0, w: 2, h: 3},
      {i: 'e', x: 8, y: 0, w: 2, h: 4, minW: 3, maxW: 5},
      {i: 'f', x: 10, y: 0, w: 2, h: 4}

    ]
    return (
      <div style={{ height: '80vh !important', overflow: 'hidden !important' }}>
      <ResponsiveGrid style={{ height: '80vh', overflow: 'auto', objectFit: 'contain !important' }} className="layout" rowHeight={30} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}} onLayoutChange={this.onLayoutChange} {...this.props} cols={{lg: 12, md: 10, sm: 8, xs: 6, xxs: 3}}>
        <div id="instafeed-0" key="a" data-grid={{ x: 10, y: 2, w: 2, h: 4 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-0'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='1789183639'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-1" key="b" data-grid={{ x: 10, y: 0, w: 2, h: 4 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-1'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='17916905'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-2" key="c" data-grid={{ x: 8, y: 4, w: 2, h: 3, minW: 3, maxW: 5 }}>
          <Instafeed
            limit='2'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-2'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='7838019'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-3" key="d" data-grid={{ x: 6, y: 1, w: 2, h: 3 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-3'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='4357811'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-4" key="e" data-grid={{ x: 4, y: 0, w: 2, h: 3 }}>
          <Instafeed
            limit='3'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-4'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='11348723'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-5" key="f" data-grid={{ x: 2, y: 4, w: 2, h: 5, minW: 2, maxW: 4 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-5'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='273712202'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-6" key="g" data-grid={{ x: 0, y: 3, w: 2, h: 2 }}>
          <Instafeed
            limit='2'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-6'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='14376307'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-7" key="h" data-grid={{ x: 10, y: 3, w: 2, h: 4 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-7'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='975175955'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-8" key="i" data-grid={{ x: 8, y: 0, w: 2, h: 4, minW: 2, maxW: 5 }}>
          <Instafeed
            limit='3'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-8'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='1079415228'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-9" key="j" data-grid={{ x: 6, y: 2, w: 2, h: 3 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-9'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='1461855489'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-10" key="k" data-grid={{ x: 5, y: 4, w: 2, h: 5 }}>
          <Instafeed
            limit='3'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-10'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='361861981'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-11" key="l" data-grid={{ x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 4 }}>
          <Instafeed
            limit='1'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-11'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='188422421'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
        <div id="instafeed-12" key="m" data-grid={{ x: 0, y: 1, w: 2, h: 3 }}>
          <Instafeed
            limit='2'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={'instafeed-12'}
            template="<img class='grid-item' src='{{image}}' />"
            userId='8205346'
            clientId='da06fb6699f1497bb0d5d4234a50da75'
            accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
        </div>
      </ResponsiveGrid>
      </div>
    );
  }
}

InstaGrid.propTypes = {

};

export default InstaGrid;

// var layout = [
//   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
//   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
//   {i: 'c', x: 4, y: 0, w: 1, h: 2},
//   {i: 'd', x: 5, y: 0, w: 2, h: 2, static: true},
//   {i: 'e', x: 2, y: 0, w: 3, h: 2, minW: 1, maxW: 3},
//   {i: 'f', x: 6, y: 0, w: 1, h: 2}
// ];

