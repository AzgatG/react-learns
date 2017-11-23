import React, { Component } from 'react';

import Comment from './Comment'
import CommentForm from './CommentForm'

import toggleOpen from '../decorators/toggleOpen'


const CommentsList = ({comments=[], isOpen, toggleOpen}) => {
  return (
    <div>
      <CommentForm />
      <button onClick={toggleOpen}>
        { isOpen ? 'close': 'open'} commen
      </button>
      { getBody({comments, isOpen}) }
    </div>
  )
}

const getBody = ({comments, isOpen}) => {
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

export default toggleOpen(CommentsList)