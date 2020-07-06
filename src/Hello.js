import React , { Component } from 'react';
import './Hello.css';

class Hello extends Component {
	render() {
		return (
			<div className="f1 tc">
				{/*as it will run properly but will give an error in the console so write className="f1 tc" 
				beacuse it is not a HTML but a javascript file(this is called as jsx)*/}
				<h1>Hello World</h1>
				<p>Welcome to the world of React</p>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;