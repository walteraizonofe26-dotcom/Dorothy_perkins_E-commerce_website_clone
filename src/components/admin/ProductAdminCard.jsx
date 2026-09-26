 function ProductAdminCard({ product, onEdit, onDelete }) {
  const { name, description, image, price, quantity, category, status } = product;

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <img src={image} alt={name} className="h-40 w-full rounded-md object-cover" />

      <div className="mt-3">
        <p className="font-semibold">{name}</p>
        {description && (
          <p className="mt-1 text-xs text-neutral-500">{description}</p>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-semibold">{price}</span>
          <span className="text-neutral-500">Qty: {quantity}</span>
          <span className="text-neutral-500">{category}</span>
        </div>

        {status && (
          <span
            className={`mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
              status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-neutral-200 text-neutral-600"
            }`}
          >
            {status}
          </span>
        )}

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onEdit && onEdit(product.id)}
            className="flex-1 rounded-md border border-neutral-300 py-1.5 text-xs font-medium hover:bg-neutral-50"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete && onDelete(product.id)}
            className="flex-1 rounded-md border border-red-300 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductAdminCard;