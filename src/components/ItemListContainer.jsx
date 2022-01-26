import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-container">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
