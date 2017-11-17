import React, { Component } from 'react';
import PropTypes from 'prop-types'


const Comment = ({text, user}) => <li>{text}</li>

Comment.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string
}

export default Comment