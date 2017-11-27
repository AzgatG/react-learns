import React, { Component } from 'react';
import {connect} from 'react-redux'

import {loadComments} from '../AC'

import Comment from './Comment'
import CommentForm from './CommentForm'
import Loader from './Loader'


import toggleOpen from '../decorators/toggleOpen'


class CommentsList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  componentWillReceiveProps({isOpen, loadComments, articleId, commentsLoaded, commentsLoading}) {
    if (isOpen && !commentsLoaded) loadComments(articleId);
  }

  render() {
    const {comments=[], isOpen, toggleOpen, articleId, commentsLoading} = this.props

    return (
      <div>
        <CommentForm articleId = {articleId} />
        <button onClick={toggleOpen}>
          { isOpen ? 'close': 'open'} commen
        </button>
        { this.getBody(comments, isOpen, commentsLoading) }
      </div>
    )
  }

  getBody = (comments, isOpen, commentsLoading) => {
    if (commentsLoading) return <Loader />
    if (!isOpen) return null;
    if (!comments.length) return <p><b>No comments yet</b></p>

    return (
      <ul>
        { 
          comments.map( id => {
            return <Comment key = {id} id = {id} />
          })
        }
      </ul>
    )
  }
}

export default connect(null, {loadComments})(toggleOpen(CommentsList))