import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartProvider from "./context/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer showHero />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/cart/:cartId">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
