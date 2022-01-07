import "./ItemListContainer.css";

const ItemListContainer = ({ greeting = "invitado" }) => {
  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-container">
        <h2>Hola {greeting}!</h2>
      </div>
    </div>
  );
};

export default ItemListContainer;
