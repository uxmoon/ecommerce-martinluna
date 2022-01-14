import "./Item.css";

function Item({ producto }) {
  const { title, price, description } = producto;
  return (
    <div className="Item">
      <img src={producto.pictureUrl} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Item;
