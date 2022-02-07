import ItemList from "./ItemList";
import "./ItemListContainer.css";
// import TestItem from "./TestItem";
// import TestCollection from "./TestCollection";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-container">
        {/* <TestItem /> */}
        {/* <TestCollection /> */}
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
