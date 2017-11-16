import React from 'react';

import './componentForm.css'


export default class CommentForm extends React.Component {
	state = {
		user: '',
		text: '',
	}

	render() {
		const {user, text} = this.state
		return (
			<form>
				User: <input type = 'text'
										 value = {user}
										 onChange = {this.handleChange('user')}
										 className = {this.getClassName('user')} />
				Text: <input type = 'text'
										 value = {text}
										 onChange = {this.handleChange('text')}
										 className = {this.getClassName('text')} />
			</form>
		);
	}

	handleChange = type => ev => {
		if (ev.target.value.length > limit[type].max) return

		this.setState({
			[type]: ev.target.value 
		});
	}

	getClassName = type => {
		return this.state[type].length && this.state[type].length < limit[type].min ? 'form-input__error' : ''
	}
}

const limit = {
	user: {
		min: 5,
		max: 15
	},
	text: {
		min: 20,
		max: 50
	}
}