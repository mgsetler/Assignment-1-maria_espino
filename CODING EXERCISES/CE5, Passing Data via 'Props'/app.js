import React from "react";

import Product from "./Product";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
	const products = [
		{
			title: "Product 1",
			price: 10,
			description: "First product",
		},
		{
			title: "Product 2",
			price: 20,
			description: "Second product",
		},
	];
	return (
		<div>
			<h1>My Demo Shop</h1>
			<div>
				<Product
					title={products[0].title}
					price={products[0].price}
					description={products[0].description}
				/>
				<Product
					title={products[1].title}
					price={products[1].price}
					description={products[1].description}
				/>
			</div>
		</div>
	);
}
