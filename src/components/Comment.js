import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// selector
import {commentsSelectorFactory} from '../selectors'


const Comment = ({comment:{text, user}}) => {
  return <li>{text} <b>by {user}</b></li>
}

Comment.propTypes = {
  comment: PropTypes.object,
  // from connect
  id: PropTypes.string.isRequired,
}

const mapStateToProps = () => {
  const commetnSelector = commentsSelectorFactory()
  
  return (state, ownProps) => {
    return {
      comment: commetnSelector(state, ownProps)
    }
  } 
}

export default connect(mapStateToProps)(Comment)