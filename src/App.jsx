import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>eCommerce</h1>
        <NavBar />
        <ItemListContainer greeting="Martin" />
      </header>
    </div>
  );
}

export default App;
