import React from 'react';
import Article from './Article';

import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends React.Component {
  render() {
    const { articles, openItemId, toogleOpenItem} = this.props
    const articleElements = articles.map(article => {
      return (
        <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === openItemId}
            toggleOpen = {toogleOpenItem}
          />
        </li>
      )
    })

    return (
      <ul>
        { articleElements }
      </ul>
    )
  }
}

export default connect(state => ({
  articles: state.articles
}))(accordion(ArticleList))