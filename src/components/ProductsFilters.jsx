import { useState } from "react";

const filterOptions = [
  { label: "Category" },
  { label: "Size" },
  { label: "Colour" },
  { label: "Style" },
  { label: "Brands" },
  { label: "Sleeve Length" },
  { label: "Body Fit" },
];

function ProductFilters() {
  const [nextDayOnly, setNextDayOnly] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-neutral-200 px-6 py-4">
      <button
        onClick={() => setNextDayOnly((prev) => !prev)}
        className="flex items-center gap-2"
        aria-pressed={nextDayOnly}
      >
        <span
          className={`flex h-5 w-9 items-center rounded-full px-0.5 transition-colors ${
            nextDayOnly ? "bg-black justify-end" : "bg-neutral-300 justify-start"
          }`}
        >
          <span className="h-4 w-4 rounded-full bg-white" />
        </span>
        <span className="text-sm font-medium">Next Day Delivery</span>
      </button>

      {/* Filter dropdown placeholders — data-driven via .map() */}
      {filterOptions.map((filter) => (
        <select
          key={filter.label}
          className="rounded border border-neutral-300 px-3 py-2 text-sm text-neutral-700 outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            {filter.label}
          </option>
        </select>
      ))}

      <button className="text-sm font-medium text-neutral-700 underline underline-offset-2 hover:text-black">
        Show more filters
      </button>

      {/* Sort */}
      <select
        className="ml-auto rounded border border-neutral-300 px-3 py-2 text-sm text-neutral-700 outline-none"
        defaultValue="relevance"
      >
        <option value="relevance">Relevance</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

export default ProductFilters