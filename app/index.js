var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
//var App = require('./components/App');


class HelloWorld extends React.Component{
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}


// The above code can be converted to this code below.
// This is because the code above has only a render method.

function HelloWorld (props) {
  return (
    <div>Hello {props.name}!</div>
  )
}


// And the two codes above are called in the exact same way:
ReactDOM.render(<HelloWorld name='Micah' />, document.getElementById('app'))
