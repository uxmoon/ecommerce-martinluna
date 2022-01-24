import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
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
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header>
    //
    //     <NavBar />
    //     <ItemListContainer />
    //     <ItemDetailContainer />
    //     <ItemCount stock={100} initial={1} />
    //   </header>
    // </div>
  );
}

export default App;
