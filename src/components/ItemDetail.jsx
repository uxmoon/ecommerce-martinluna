import "./ItemDetail.css";

export default function ItemDetail({ title, price, thumbnail }) {
  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{title}</h2>
        <p className="ItemDetail-price">$ {price}</p>
        {/* <ul>
          {description.map((item) => (
            <li>{item}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
