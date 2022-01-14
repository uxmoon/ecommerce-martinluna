import "./ItemListContainer.css";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting = "invitado" }) => {
  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-container">
        <h2>Hola {greeting}!</h2>
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
