import { useState } from "react";
import axios from "axios";

function EditProductModal({ product, onClose, onUpdated }) {
  const [formData, setFormData] = useState({
    title: product.title || "",
    descp: product.descp || "",
    price: product.price || "",
    brand: product.brand || "",
    quantity: product.quantity || "",
    images: product.images?.join(", ") || "",
    currency: product.currency || "",
    category:
      typeof product.category === "object"
        ? product.category?.name || ""
        : product.category || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await axios.put(
        `http://ecommerce.reworkstaging.name.ng/v2/products/${product.id}`,
        {
          title: formData.title,
          descp: formData.descp,
          price: Number(formData.price),
          brand: formData.brand,
          quantity: Number(formData.quantity),
          images: formData.images.split(",").map((url) => url.trim()),
          currency: formData.currency,
          category: formData.category,
        }
      );

      onUpdated();
    } catch (err) {
      console.log(err);
      setError("Could not update product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Edit Product</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-neutral-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="descp"
              value={formData.descp}
              onChange={handleChange}
              rows={3}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Currency</label>
              <input
                type="text"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Image URLs (comma separated)</label>
            <textarea
              name="images"
              value={formData.images}
              onChange={handleChange}
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div className="mt-2 flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-md bg-neutral-900 py-2.5 text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
            >
              {isSubmitting ? "Updating..." : "Update Product"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-md border border-neutral-300 py-2.5 text-sm font-semibold hover:bg-neutral-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;