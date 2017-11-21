import React from 'react';
import Article from './Article';

import accordion from '../decorators/accordion';
import {connect} from 'react-redux';

class ArticleList extends React.Component {
  render() {
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

export default connect(({articles, filter}) => {
  const {selected, dateRange: {from, to}} = filter;

  let mapSelected = selected.map( select => select.value );

  let filteredArticles = articles.filter( article => {
    let published = Date.parse(article.date);
    return (!mapSelected.length || mapSelected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
  });

  return({
    articles: filteredArticles
  });
})(accordion(ArticleList));