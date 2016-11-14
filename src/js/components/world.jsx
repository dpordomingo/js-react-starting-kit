import React from 'react';
import ReactDOM from 'react-dom';
require('../../sass/components/world.scss');

class World extends React.Component {
  render() {
    return <span>World</span>
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));
