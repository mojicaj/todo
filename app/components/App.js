var React = require('react');
var GetDate = require('./GetDate');
var Task = require('./Task');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <GetDate />
        <Task />
      </div>
    )
  }
}

module.exports = App;