var React = require('react');
var PropTypes = require('prop-types');
var NewTask = require('./NewTask');
var DisplayTasks = require('./DisplayTasks');


class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newtask) {
    this.setState(function () {
      return this.state.tasks.push(newtask);
    });
  }

	render() {
    var tasks = this.state.tasks;

		return (
      <div className='section'>
        <DisplayTasks tasks={tasks} />

        <NewTask last={tasks[tasks.length - 1]} onSubmit={this.handleSubmit} />
      </div>
		)
	}
}

module.exports = Task;