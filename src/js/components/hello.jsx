import React from 'react';
import ReactDOM from 'react-dom';
require('../../sass/components/hello.scss');

class Hello extends React.Component {
  render() {
    return <b>Hello</b>
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('hello'));
