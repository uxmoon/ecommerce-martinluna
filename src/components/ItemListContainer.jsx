import ItemList from "./ItemList";
import Hero from "./Hero";

const ItemListContainer = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-8 pb-16">
      <Hero />
      <ItemList />
    </main>
  );
};

export default ItemListContainer;
