import { useState } from "react";

export default function FruitForm({ fruits, setFruits }) {
	// state
	const [fruitInput, setFruitInput] = useState("");

	// comportements
	const handleChange = (event) => {
		setFruitInput(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const fruitsCopy = [...fruits];

		const fruitObj = { id: fruitsCopy.at(fruits.length - 1).id + 1, name: fruitInput };

		fruitsCopy.push(fruitObj);

		setFruits(fruitsCopy);

		console.log('fruits: ', fruits);

		setFruitInput('');
	}

	// render
	return (
		<form action="submit" onSubmit={handleSubmit}>
			<input value={fruitInput} type="text" placeholder="Ajouter un fruit..." onChange={handleChange} />
			<button>Ajouter *</button>
		</form>);
}
