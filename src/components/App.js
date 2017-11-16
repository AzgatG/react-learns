import React from 'react';
import Select from 'react-select';

import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css';

import ArticleList from './ArticleList'
import UserForm from './UserForm'


export default class App extends React.Component {
	static defaultProps = {
	  numberOfMonths: 2,
	};

	constructor(props) {
	  super(props);
	  this.handleDayClick = this.handleDayClick.bind(this);
	  this.handleResetClick = this.handleResetClick.bind(this);
	  this.state = this.getInitialState();
	}
	getInitialState() {
	  return {
	    from: undefined,
	    to: undefined,
  		selection :null,
	  };
	}
	handleDayClick(day) {
	  const range = DateUtils.addDayToRange(day, this.state);
	  this.setState(range);
	}
	handleResetClick() {
	  this.setState(this.getInitialState());
	}

  render() {
	  const options = this.props.articles.map(article => ({
	  	label: article.title,
	  	value: article.id
	  }))
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
				<UserForm />
				<Select 
					name="form-field-name"
				  value={this.state.selection}
					options={options}
					onChange={this.changeSelection}
					multi
				/>
				<ArticleList articles={this.props.articles} />
      </div>
    );
  }

  changeSelection = selection => this.setState({selection})
}