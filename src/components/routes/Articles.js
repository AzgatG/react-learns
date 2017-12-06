import React, { Component } from 'react';
import {Route} from 'react-router-dom'
// components
import Article from '../Article' 
import ArticleList from '../ArticleList' 


export default class Articles extends Component {
	render() {
		return (
			<div>
				<ArticleList />
				<Route path = '/articles' render = {this.getIndex} exact />
				<Route path = '/articles/:id' render = {this.getArticle} />
			</div>
		);
	}

	getArticle = ({match}) => {
		const {id} = match.params
		return <Article  id = {id} isOpen key = {id} />
	}

	getIndex = () => {
		return <h2>Выберите статью</h2>
	}
}
