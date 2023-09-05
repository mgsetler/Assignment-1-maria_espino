import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
	const [price, setPrice] = React.useState(100); // 100 is the default price state

	function clickHandler() {
		setPrice(75); // executed upon <button> clicks!
	}

	return (
		<div>
			<p>${price}</p>
			<button onClick={clickHandler}>Apply Discount</button>
		</div>
	);
}
