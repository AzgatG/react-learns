import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'

import './style.css'

import CommentsList from '../CommentsList'
import Loader  from '../Loader'

import {deleteArticle, loadArticle} from '../../AC'

 
class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    })
  }

  componentDidMount() {
    const {loadArticle, article, id} = this.props
    if (!article || (!article.text && !article.loading)) loadArticle(id)
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    if (!article) return null
    return (
      <div ref={this.setContainerRef}>
        <h3>{ article.title }</h3>
        <button onClick={ toggleOpen }>
           { isOpen ? 'close' : 'open' }
        </button>
        <button onClick={this.handleOnclick}>Delete</button>
        <CSSTransitionGroup
          transitionName='article'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}				 
        >
          { this.getBody() }
        </CSSTransitionGroup>
      </div>
    )
  }

  handleOnclick = () => {
    const {deleteArticle, article} = this.props
    deleteArticle(article.id)
  }

  setContainerRef = ref => {
    this.container = ref;
  }

  getBody = () => {
    const {article, isOpen} = this.props;
    if (article.loading) return <Loader />
    const {comments} = article;
    
    if (!isOpen) return null

    return (
      <selection>
        { article.text }
        <CommentsList
          {...{comments}}
          articleId = {article.id}
          commentsLoaded = {article.commentsLoaded}
          commentsLoading = {article.commentsLoading}
        />
      </selection>
    )
  }
}

export default connect((state, ownProps) =>({
  article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle })(Article )