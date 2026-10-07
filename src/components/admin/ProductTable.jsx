function ProductTable({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-white px-4 py-8 text-center text-sm text-neutral-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Image</th>
            <th className="px-4 py-3 font-medium">Product Name</th>
            <th className="px-4 py-3 font-medium">Price</th>
            <th className="px-4 py-3 font-medium">Quantity</th>
            <th className="px-4 py-3 font-medium">Category</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            // The API's category field can arrive as an object ({id, name, image})
            // or a plain string, depending on the endpoint — handle both safely.
            const categoryLabel =
              typeof product.category === "object"
                ? product.category?.name
                : product.category;

            return (
              <tr key={product.id} className="border-b border-neutral-100 last:border-0">
                <td className="px-4 py-3">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{product.title}</td>
                <td className="px-4 py-3">
                  {product.currency} {product.price}
                </td>
                <td className="px-4 py-3">{product.quantity}</td>
                <td className="px-4 py-3">{categoryLabel}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit && onEdit(product.id)}
                      className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete && onDelete(product.id)}
                      className="rounded-md border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;