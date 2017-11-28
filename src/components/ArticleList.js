import React from 'react';
import Article from './Article';
import Loader from './Loader';
import {connect} from 'react-redux';

// decorator
import accordion from '../decorators/accordion';
// reselect
import {filtratedArticlesSelector} from '../selectors'
// AC
import {loadAllArticles} from '../AC'


class ArticleList extends React.Component {
  componentDidMount() {
    const {loading, loaded, loadAllArticles} = this.props
    if (!loading && !loaded) loadAllArticles()
  }

  render() {
    const { articles, openItemId, toogleOpenItem, loading } = this.props;

    if (loading) return <Loader />

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
    articles: filtratedArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  };
}, { loadAllArticles })(accordion(ArticleList));