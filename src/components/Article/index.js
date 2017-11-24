import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'

import './style.css'

import CommentsList from '../CommentsList'
import {deleteArticle} from '../../AC'

 
class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  }

  render() {
    const {article , isOpen, toggleOpen} = this.props;

    return (
      <div ref={this.setContainerRef}>
        <h3>{ article.title }</h3>
        <button onClick={ toggleOpen(article.id) }>
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
    const {comments} = article;
    
    if (!isOpen) return null

    return (
      <selection>
        { article.text }
        <CommentsList {...{comments}} articleId = {article.id}/>
      </selection>
    )
  }
}

export default connect(null, { deleteArticle })(Article )