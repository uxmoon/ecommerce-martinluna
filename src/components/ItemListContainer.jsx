import ItemList from "./ItemList";
import Hero from "./Hero";

const ItemListContainer = ({ showHero }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-8 pb-16">
      {showHero && <Hero />}
      <ItemList />
    </main>
  );
};

export default ItemListContainer;
