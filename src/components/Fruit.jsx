export default function Fruit({ fruitInfo, onFruitDelete }) {
	// state
	// const fruitInfo = props.fruitInfo;
	// const onFruitDelete = props.onFruitDelete;
	// const { fruitInfo, onFruitDelete } = props;


	// comportements


	// render
	return (<li>{fruitInfo.name} <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button></li>);
}
