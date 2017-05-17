var React = require('react');

class DisplayTasks extends React.Component {
  
  handleClick(task) {
    console.log(task.target);
  }

  render() {
    return (
      <div className='tasks-div'>
        <ul className='tasks-list'>
          {this.props.tasks.map(function (task) {
            return (
              <li key={task} onClick={this.handleClick}>{task}</li>
            )
          }, this)}
        </ul>
      </div>
    )
  }

}

module.exports = DisplayTasks;