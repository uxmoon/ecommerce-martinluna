import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";
import ButtonLink from "./ButtonLink";

export default function ItemDetail({ product, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain h-96 w-96 mb-4"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-xl mb-4">$ {price && formatPrice(price)}</p>
        <p className="mb-4">{description}</p>
        {addedToCart ? (
          <>
            <ButtonLink path="/cart">Terminar mi compra</ButtonLink>
            <ButtonLink path="/" variant="secondary">Seguir comprando</ButtonLink>
          </>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}
