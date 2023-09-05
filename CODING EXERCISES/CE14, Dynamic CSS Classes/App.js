import React, { useState } from "react";

// don't change the Component name "App"
export default function App() {
	const [highlighted, setHighlighted] = React.useState(false);

	function clickHandler() {
		setHighlighted((isHighlighted) => !isHighlighted);
	}

	return (
		<div>
			<p className={highlighted ? "active" : ""}>Style me!</p>
			<button onClick={clickHandler}>Toggle style</button>
		</div>
	);
}
