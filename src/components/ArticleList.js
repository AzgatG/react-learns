import React from 'react';
import Article from './Article';
import {connect} from 'react-redux';

// decorator
import accordion from '../decorators/accordion';
// reselect
import {filtratedArticlesSelector} from '../selectors'
// AC
import {loadAllArticles} from '../AC'


class ArticleList extends React.Component {
  componentDidMount() {
    this.props.loadAllArticles()
  }

  render() {
    console.log('----', 'update article list');
    const { articles, openItemId, toogleOpenItem } = this.props;
    const articleElements = articles.map(article => {
      return (
        <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === openItemId}
            toggleOpen = {toogleOpenItem}
          />
        </li>
      );
    });

    return (
      <ul>
        { articleElements }
      </ul>
    );
  }
}

export default connect((state) => {
  return { 
    articles: filtratedArticlesSelector(state)
  };
}, { loadAllArticles })(accordion(ArticleList));