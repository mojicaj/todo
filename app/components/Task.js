var React = require('react');
var NewTask = require('./NewTask');
var DisplayTasks = require('./DisplayTasks');


class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      last: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(newtask) {

    this.setState(function () {
      return this.state.tasks.push(newtask)
    });


    this.setState(function () {
      return {last: this.state.tasks[this.state.tasks.length - 1]}
    });
  }

  handleClick(deleted) {
    this.setState({
      tasks: this.state.tasks.filter(function (t) {
        return t !== deleted;
      })
    });
  }


	render() {
    var tasks = this.state.tasks;
    var count;
    var len = tasks.length;

    if (tasks.length > 0) {
      count = <h2 className='count'>{'{ ' + len + (len === 1 ? ' Task' : ' Tasks') + ' }'}</h2>;
    } else {
      count = '';
    }

		return (
      <div className='section'>
        {count}
        <DisplayTasks tasks={tasks} onClick={this.handleClick} />

        <NewTask last={this.state.last} onSubmit={this.handleSubmit} />
      </div>
		)
	}
}

module.exports = Task;