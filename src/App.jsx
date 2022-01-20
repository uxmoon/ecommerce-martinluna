import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemCount } from "./components/ItemCount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>eCommerce</h1>
        <NavBar />
        <ItemListContainer greeting="Martin" />
        <ItemDetailContainer />
        <ItemCount stock={100} initial={1} />
      </header>
    </div>
  );
}

export default App;
