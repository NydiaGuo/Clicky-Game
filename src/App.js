import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import card from "./card.json";
import "./App.css";

class App extends Component {

	//Setting this.state.cards to the card json array
	state = {
		message: "Click an image to begin!",
		topScore: 0,
		curScore: 0,
		card: card
	};

	//once click on the images:
	//1. Have not clicked yet(game continues): 
	//  1.1 Fliter the clicked one to another new array
	//	1.2 shuffle the new array
	//  1.3 push the shffled new array to the old array
	//  1.4 Add Score and Top Score pionts by one
	//2. Have clicked:
	//  2.1 Score pionts back to ZERO, Top Score stays the highest
	//  2.2 images run randmonly

	selectCard = id => {
		this.state.card.forEach((image) => {
			if (image.id === id) {

				if (image.clicked) {
					this.resetGame();
					return;
				}
				else {
					this.updateScore();
					image.clicked = true;
					this.setState({ curScore: this.state.curScore + 1});

					if (this.state.curScore >= this.state.topScore) {
					this.highestScore();
					}
				}

			}
	
		});
	};

	shuffleCard = (array) => {
		let shuffle = [], length = array.length, i;
		while (length) {
			i = Math.floor(Math.random() * array.length);
			if (i in array) {
				shuffle.push(array[i]);
				delete array[i];
				length--;
			}
		}
		this.setState({ card: shuffle });
	};

	updateScore = () => {
		this.setState((newState) => ({
			curScore: newState.curScore + 1
		}))
	};

	highestScore = () => {
		this.setState((newState) => ({
			topScore: newState.topScore + 1
		}))
	};	

		// const card = this.state.card.filter(card => card.id !== id);

		// 	this.setState({ card });
		// 	this.setState({ 
		// 		curScore: this.state.curScore + 1,
		// 		topScore: this.state.topScore + 1  
		// 	});
		// 	console.log(card.length);



	resetGame = () => {
		this.state.card.forEach((image) => {
			image.clicked = false;
		})
		this.setState({ curScore: 0 });
	};




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
			 					selectCard={this.selectCard}
			 					shuffleCard={this.shuffleCard}
								key={card.id}
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