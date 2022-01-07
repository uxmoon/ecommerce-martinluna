import "./ItemListContainer.css";

const ItemListContainer = ({ greeting = "invitado" }) => {
  return (
    <div className="ItemListContainer">
      <h2>Hola {greeting}!</h2>
    </div>
  );
};

export default ItemListContainer;
