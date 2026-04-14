interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: () => void;
}

export default function CategoryFilter(
  {
    categories,
    selected,
    onSelect,
  }: CategoryFilterProps) {
    // Jonkunlainen for each joka tekee kategoriat,
    // highlighttaa selectin, onSelect kutsutaan kun painetaan kategoriaa
    // Pitää ehkä luoda joku category objekti?
    categories = ["beauty", "sports", "casual"];
    selected = "sports";

  return (
    <div className="flex flex-wrap gap-3 m-2">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-6 py-2 rounded-full font-bold ${category === selected
            ? "bg-[#085378] text-black"
            : "bg-[#1881b5]"
          }`}
        >
          { category }
        </button>
      ))}
    </div>
  
  );
}