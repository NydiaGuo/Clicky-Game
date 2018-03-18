import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cards from "./card.json";

class App extends Component {
	//Setting this.state.card to the card json array
	state = {
		message: "Click an image to begin!",
		cards: cards,
		unPickCards: cards,
		topScore: 0,
		curScore: 0,
		
	};

	removeCard = id => {
		const cards = this.state.cards.filter(card => card.id !== id);
		// Set this.state.friends equal to the new friends array
		this.setState({ newCards });
	};


	render() {
		return (
			<div>
			<Title>Cliky Games</Title>


			</div>

			);
	};


}

export default App;