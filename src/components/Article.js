import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './article.css'

import CommentsList from './CommentsList'

 
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
				<CommentsList {...{comments}} />
			</selection>
		)
	}
}

export default Article