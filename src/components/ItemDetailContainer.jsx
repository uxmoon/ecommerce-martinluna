import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        <ItemDetail />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
