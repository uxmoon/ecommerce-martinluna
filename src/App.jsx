import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemCount } from "./components/ItemCount";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header>
    //     <h1>eCommerce</h1>
    //     <NavBar />
    //     <ItemListContainer />
    //     <ItemDetailContainer />
    //     <ItemCount stock={100} initial={1} />
    //   </header>
    // </div>
  );
}

export default App;
