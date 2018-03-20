import React from "react";
import "./Card.css";

const Card = props => (
<div className="card">
	<div onClick={ () => {
			console.log(props);
			props.selectCard(props.id)
		}} className="img-container">
		<img alt={props.name} src={props.image} className="select_card"
		/>
	
	</div>
</div>

);

export default Card; 