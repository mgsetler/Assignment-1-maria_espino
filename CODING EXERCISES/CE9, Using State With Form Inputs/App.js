import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
	const [messageValidity, setMessageValidity] = React.useState("Invalid");
	// more code...

	function messageChangeHandler(event) {
		// Todo: Add logic
		const value = event.target.value;
		if (value.trim().length < 3) {
			// Todo: Update state to say "Valid"
			setMessageValidity("Invalid");
		} else {
			// Todo: Update state to say "Invalid Message"
			setMessageValidity("Valid");
		}
	}

	return (
		<form>
			<label>Your message</label>
			<input type="text" onChange={messageChangeHandler} />
			<p>{messageValidity} message</p>
		</form>
	);
}
