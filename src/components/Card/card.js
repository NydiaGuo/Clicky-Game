import React from "react";
import "./Card.css";

const Card = props => (

	<div className="img-container">
		<img onClick={() => props.seclectCard(props.id)} alt={props.name} src={props.image} />
	
	</div>

);

export default Card; 