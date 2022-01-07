const ItemListContainer = ({ greeting = "invitado" }) => {
  return (
    <div className="ItemListContainer">
      <p>Hola {greeting}!</p>
    </div>
  );
};

export default ItemListContainer;
