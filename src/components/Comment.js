import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const Comment = ({comment:{text, user}}) => {
  return <li>{text} <b>by {user}</b></li>
}

Comment.propTypes = {
  comment: PropTypes.object,
  // from connect
  id: PropTypes.string.isRequired,
}

export default connect((state, ownProps) => {
  const comment = state.comments.find(comment => comment.id === ownProps.id)
  return {
    comment
  }
})(Comment)