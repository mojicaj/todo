var React = require('react');
var ReactDOM = require('react-dom')
require('./index.css');

class Test extends React.Component {
  render() {
    return <div>Hello ToDo!</div>
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('app')
); 