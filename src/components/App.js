import React, { Component } from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
// components
import Articles from './routes/Articles';
// import UserForm from './UserForm'
import Filter from './Filter';
import Counter from './Counter';


export default class App extends Component {
	render() {
		return (
			<Router>
		    <div>
		    	<div>
		    		<h2>Main menu</h2>
		    		<div><NavLink activeStyle = {{color: 'red'}} to ='/counter'>Counter</NavLink></div>
		    		<div><NavLink activeStyle = {{color: 'red'}} to ='/filter'>Filter</NavLink></div>
		    		<div><NavLink activeStyle = {{color: 'red'}} to ='/articles'>Articles</NavLink></div>
		    	</div>
		    	<Route path = '/counter' component = {Counter} />
		    	<Route path = '/filter' component = {Filter} />
		    	<Route path = '/articles' component = {Articles} />
		    </div>
		   </Router>
		);
	}
}
