import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, images, descp, price, currency } = product;

  return (
    <div>
      <img src={images?.[0]} alt={title} className="h-72 w-full object-cover" />

      <div className="mt-2">
        <p className="text-sm text-neutral-800">{title}</p>

        {descp && <p className="text-xs text-neutral-500">{descp}</p>}

        <p className="mt-1 text-sm font-semibold">
          {currency} {price}
        </p>

        <Link
          to={`/product/${id}`}
          className="mt-3 block w-full bg-gray-200 py-2 text-center text-xs font-semibold hover:bg-gray-300"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;