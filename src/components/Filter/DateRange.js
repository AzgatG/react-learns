import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux'
// css
import 'react-day-picker/lib/style.css';
// reducer
import {changeDate} from '../../AC'


class DateRange extends React.Component {
	static defaultProps = {
	  numberOfMonths: 2,
	}

  handleDayClick = day => {
    const {changeDate, from, to} = this.props;
    const range = DateUtils.addDayToRange(day, {from, to});
    changeDate(range);
  }

  render() {
  	const { from, to } = this.props;

    return (
      <div>
      	<div className="RangeExample">
      	  <p>
      	    {!from && !to && 'Please select the first day.'}
      	    {from && !to && 'Please select the last day.'}
      	    {from &&
      	      to &&
      	      `Selected from ${from.toLocaleDateString()} to
      	          ${to.toLocaleDateString()}`}{' '}
      	    {from && to && <button onClick={this.handleResetClick}>Reset</button>}
      	  </p>
      	  <DayPicker
      	    numberOfMonths={this.props.numberOfMonths}
      	    selectedDays={[from, { from, to }]}
      	    onDayClick={this.handleDayClick}
      	    fixedWeeks
      	  />
      	</div>
      </div>
    );
  }
}

export default connect(({filter}) => ({
  from: filter.dateRange.from,
  to: filter.dateRange.to
}), { changeDate })(DateRange)