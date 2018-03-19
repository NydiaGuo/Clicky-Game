import React, { Component } from "react";
import Card from "./components/Card";
// import Container from "./components/Container";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import card from "./card.json";

class App extends Component {

	//Setting this.state.cards to the card json array
	state = {
		message: "Click an image to begin!",
		topScore: 0,
		curScore: 0,
		clicked: false
		
	};

	seclectCard = (id) => {
		this.setState({ topScore: this.state.topScore + 1;
		curScore:this.state.curScore +1 });
	}
	// {removeCard = id => {
	// 	const newCards = this.state.cards.filter(card => card.id !== id);
	// 	// Set this.state.cards equal to the new friends array
	// 	this.setState({ newCards });
	// };}

	render() {
		return (
			<div>
				<Navbar 
					className="navbar" 
					message={this.state.message}
					curScore={this.state.curScore}
					topScore={this.state.topScore}
				/>
				<Header />

 				<div className="container">

 					{this.state.card.map(card => (
			 			<Card 
								// removeCard={this.removeCard}
								id={card.id}
								clicked={card.clicked}
				 				image={card.image}
			 				/>
		 			
					))}

				</div>

				
			</div>

			);
	};
}

export default App;