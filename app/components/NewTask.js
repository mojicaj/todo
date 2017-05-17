var React = require('react');

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
    //var last = this.props.list;
    var valueTxt;
    

    if (this.state.newtask === undefined || this.props.last === this.state.newtask) {
      valueTxt = '';
    } else {
      valueTxt = this.state.newtask;
    }
    
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        
        <input id='newtask' placeholder='Enter a task to add'
          type='text' autoComplete='off' value={valueTxt}
          onChange={this.handleChange} />

        <button className='button' type='submit'
          disabled={!this.state.newtask}>Add Task</button>

      </form>
    )
  }
}

module.exports = NewTask;