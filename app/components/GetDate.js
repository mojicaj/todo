var React = require('react');

class GetDate extends React.Component {

  render() {
  	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1;  //January is 0!
	var year = today.getFullYear();
	var todayForm = month + "/" + day + "/" + year;

    return ( 
    	<div className='date'>{todayForm}</div>
    )
  }
}

module.exports = GetDate;