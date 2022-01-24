import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { ItemCount } from "./ItemCount";

export default function Products() {
  return (
    <div>
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemCount stock={100} initial={1} />
    </div>
  );
}
