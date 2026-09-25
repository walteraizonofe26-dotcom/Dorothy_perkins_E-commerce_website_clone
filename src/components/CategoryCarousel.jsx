 function CategoryCarousel({ categories }) {

  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex justify-center gap-6 overflow-x-auto px-6 py-6">
      {categories.map((cat) => (
        <div key={cat.name} className="flex shrink-0 flex-col items-center gap-2">
          <img
            src={cat.image}
            alt={cat.name}
            className="h-24 w-24 rounded-full bg-[#f2e4d4] object-cover md:h-28 md:w-28"
          />
          <p className="text-xs font-medium">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCarousel;