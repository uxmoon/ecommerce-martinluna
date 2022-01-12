import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemCount } from "./components/ItemCount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>eCommerce</h1>
        <NavBar />
        <ItemListContainer greeting="Martin" />
        <ItemCount />
      </header>
    </div>
  );
}

export default App;
