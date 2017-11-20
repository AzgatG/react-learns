import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';


export default class DateRange extends React.Component {
	static defaultProps = {
	  numberOfMonths: 2,
	};

  constructor(props) {
    super(props);

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = () => {
    this.setState(this.getInitialState());
  }

  render() {
  	const { from, to } = this.state;

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