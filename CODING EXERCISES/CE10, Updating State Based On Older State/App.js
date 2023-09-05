import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
	// State to store count value
	const [counter, setCounter] = React.useState(0);

	// Function to increment count by 1
	function incrementCounterHandle() {
		// Todo: state updating logic
		setCounter((prevCounter) => prevCounter + 1);
	}

	return (
		<div>
			<p id="counter">{counter}</p>
			<button onClick={incrementCounterHandle}>Increment</button>
		</div>
	);
}
