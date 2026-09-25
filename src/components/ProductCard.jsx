import { useState } from "react";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    brand,
    name,
    description,
    image,
    price,
    oldPrice,
    discount,
    rating,
    reviews,
    colors,
  } = product;

  return (
    <div className="relative">
      {/* Wishlist button */}
      <button
        onClick={() => setIsWishlisted((prev) => !prev)}
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-lg shadow"
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <img src={image} alt={name} className="h-72 w-full object-cover" />

      <div className="mt-2">
        {brand && <p className="text-xs font-semibold text-neutral-500">{brand}</p>}

        <p className="text-sm text-neutral-800">{name}</p>

        {description && (
          <p className="text-xs text-neutral-500">{description}</p>
        )}

        {/* Price row — oldPrice/discount only render if they exist */}
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span
            className={`text-sm font-semibold ${
              oldPrice ? "text-red-600" : "text-black"
            }`}
          >
            {price}
          </span>
          {oldPrice && (
            <span className="text-sm text-neutral-400 line-through">{oldPrice}</span>
          )}
          {discount && (
            <span className="text-xs font-semibold text-red-600">{discount}</span>
          )}
        </div>

        {/* Rating — only if provided */}
        {rating && (
          <div className="mt-1 flex items-center gap-1 text-xs text-neutral-600">
            <span>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>
            {reviews && <span>({reviews})</span>}
          </div>
        )}

        {/* Color swatches — only if provided */}
        {colors && colors.length > 0 && (
          <div className="mt-2 flex gap-1.5">
            {colors.map((color, index) => (
              <span
                key={index}
                className="h-4 w-4 cursor-pointer rounded-full border border-neutral-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard