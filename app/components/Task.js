var React = require('react');
var PropTypes = require('prop-types');

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newtask: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        newtask: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.newtask
    );
  }

  render() {
    var last = this.props.list;
    var valueTxt;
    

    if (this.state.newtask === undefined || last[last.length - 1] === this.state.newtask) {
      valueTxt = '';
    } else {
      valueTxt = this.state.newtask;
    }
    
    return (
      <form className='newtask' onSubmit={this.handleSubmit}>
        
        <label className='header' htmlFor='newtask'>
          Add a new task to your list
        </label>

        <input id='newtask' placeholder='Enter a new task'
          type='text' autoComplete='off' value={valueTxt}
          onChange={this.handleChange} />

        <button className='newtask-btn' type='submit'
          disabled={!this.state.newtask}>Add New Task</button>

      </form>
    )
  }
}

/*NewTask.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}*/

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
      <div>
        {tasks}

        <NewTask list={tasks} onSubmit={this.handleSubmit} />
      </div>
		)
	}
}

module.exports = Task;