var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var GetDate = require('./GetDate');
var Task = require('./Task');

class App extends React.Component {
  render() {
    return (
      <div>
        <GetDate />
        <Task />
      </div>
    )
  }
}

module.exports = App;