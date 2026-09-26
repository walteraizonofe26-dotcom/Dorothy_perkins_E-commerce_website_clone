 function ProductTable({ products, onEdit, onDelete }) {
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
          {products.map((product) => (
            <tr key={product.id} className="border-b border-neutral-100 last:border-0">
              <td className="px-4 py-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-md object-cover"
                />
              </td>
              <td className="px-4 py-3 font-medium">{product.name}</td>
              <td className="px-4 py-3">{product.price}</td>
              <td className="px-4 py-3">{product.quantity}</td>
              <td className="px-4 py-3">{product.category}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    product.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-neutral-200 text-neutral-600"
                  }`}
                >
                  {product.status}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;