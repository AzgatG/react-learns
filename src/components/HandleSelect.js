import React from 'react';
import Select from 'react-select';


import 'react-select/dist/react-select.css';


export default class HandleSelect extends React.Component {
  state = {
  	selection :null
  }

  render() {
  	const options = this.props.articles.map(article => ({
  	  label: article.title,
  	  value: article.id
  	}))

    return (
      	<Select 
      	  name="form-field-name"
      	  value={this.state.selection}
      	  options={options}
      	  onChange={this.changeSelection}
      	  multi
      	/>
    );
  }

   changeSelection = selection => this.setState({selection})
}
