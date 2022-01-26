import "./ItemDetail.css";
import ItemCount from "./ItemCount";

export default function ItemDetail({ title, price, thumbnail, description }) {
  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{title}</h2>
        <p className="ItemDetail-price">{price}</p>
        <ul>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}
