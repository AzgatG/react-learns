import React from 'react';

import './style.css'


export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      user: '',
      text: '',
    };
  }

  render() {
    const {user, text} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        User: <input type = 'text'
                     value = {user}
                     onChange = {this.handleChange('user')}
                     className = {this.getClassName('user')} />
        Text: <input type = 'text'
                     value = {text}
                     onChange = {this.handleChange('text')}
                     className = {this.getClassName('text')} />
        <input type='submit' value='submit' />
      </form>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState(this.getInitialState());
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