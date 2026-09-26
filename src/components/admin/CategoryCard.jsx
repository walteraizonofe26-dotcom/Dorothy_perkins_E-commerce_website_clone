 function CategoryCard({ category, onEdit, onDelete }) {
  const { name, image, productCount } = category;

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <img src={image} alt={name} className="h-32 w-full rounded-md object-cover" />
      <p className="mt-3 font-semibold">{name}</p>
      <p className="text-xs text-neutral-500">{productCount} products</p>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => onEdit && onEdit(category.id)}
          className="flex-1 rounded-md border border-neutral-300 py-1.5 text-xs font-medium hover:bg-neutral-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete && onDelete(category.id)}
          className="flex-1 rounded-md border border-red-300 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;