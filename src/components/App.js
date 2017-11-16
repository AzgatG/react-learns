import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

import ArticleList from './ArticleList'
import UserForm from './UserForm'


export default class App extends React.Component {
  static propTypes = {
  };

  state = {
  	selection :null
  }

  render() {
	  const options = this.props.articles.map(article => ({
	  	label: article.title,
	  	value: article.id
	  }))

    return (
      <div>
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
