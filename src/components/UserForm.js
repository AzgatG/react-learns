import React from 'react';

export default class UserForm extends React.Component {
  static propTypes = {
  };

  state = {
  	username: ''
  }

  render() {
    return (
      <div>
      	Name: 
      	<input type="text"
      	       value={this.state.username}
      	       onChange={this.handleUserChange} />
      </div>
    );
  }

  handleUserChange = ev => {
  	this.setState({
  		username: ev.target.value
  	})
  }
}
