import React from 'react';
import ArticleList from './ArticleList'
import UserForm from './UserForm'


export default class App extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
					<UserForm />
					<ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
