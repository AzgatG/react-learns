import React from 'react';
import {NavLink} from 'react-router-dom'
// components
import Loader from './Loader';
import {connect} from 'react-redux';
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
    const { articles, loading } = this.props;

    if (loading) return <Loader />

    const articleElements = articles.map(article => {
      return (
        <li key = {article.id}>
          <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>{article.title}</NavLink>
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
}, { loadAllArticles })(ArticleList);