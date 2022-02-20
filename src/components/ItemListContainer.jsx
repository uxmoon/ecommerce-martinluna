import ItemList from "./ItemList";
import Hero from "./Hero";

export default function ItemListContainer({ showHero }) {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 pt-8 pb-16">
      {showHero && <Hero />}
      <ItemList />
    </main>
  );
}
