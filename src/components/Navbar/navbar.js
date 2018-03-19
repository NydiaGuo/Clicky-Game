import React from "react";
import "./Navbar.css";

const Navbar = props => {
	return (
		<nav className="navbar navbar-dark bg-danger">
			<a className="navbar-brand" href="#"><h2>Clicky Game</h2></a>
		    <h2>{props.message}</h2>
		    <h2>Score: {props.curScore} | Top Score: {props.topScore}</h2>
		</nav>
		);
};

export default Navbar;

