import { useState } from "react";
import Fruit from './components/Fruit';
import FruitForm from "./components/FruitForm";

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Khaled</h1>
//       <h2>Start to editing to see some magic happen!</h2>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

function App() {
  // B1
  const [fruits, setFruits] = useState([
    { "id": 1, name: "Abricot" },
    { "id": 2, name: "Banane" },
    { "id": 3, name: "Cerise" }
  ]);

  // const inputRef = useRef();

  // B2
  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];

    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    setFruits(fruitsCopyUpdated);
  }

  // B3
  return (
    <div>
      <h1>Liste des fruits: </h1>
      <ul>
        {fruits.map((fruit) => <Fruit key={fruit.id} fruitInfo={fruit} onFruitDelete={handleDelete} />)}
      </ul>
      <FruitForm fruits={fruits} setFruits={setFruits} />
    </div>
  );

}

export default App;
