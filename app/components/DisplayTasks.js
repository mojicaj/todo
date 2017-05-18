var React = require('react');

class DisplayTasks extends React.Component {
  
  handleClick(k) {
    this.props.onClick(k);
  }

  render() {
    return (
      <div className='tasks-div'>
        <ul className='tasks-list'>
          {this.props.tasks.map(function (task) {
            return (
              <li key={task} onClick={this.handleClick.bind(this, task)}>{task}</li>
            )
          }, this)}
        </ul>
      </div>
    )
  }

}

module.exports = DisplayTasks;