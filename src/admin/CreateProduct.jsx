import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

const categoryOptions = [
  "Dresses",
  "Tops",
  "Trousers",
  "Knitwear",
  "Coats & Jackets",
  "Shoes",
  "Petite",
  "Beauty",
  "Home",
];

const currencyOptions = ["GBP (£)", "USD ($)", "EUR (€)"];

 function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    quantity: "",
    description: "",
    brand: "",
    category: "",
    currency: "GBP (£)",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API logic added later
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader title="Create Product" />

        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-3xl flex-col gap-8 rounded-lg border border-neutral-200 bg-white p-6"
          >
            {/* Basic info */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">Basic Information</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Product Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Pricing & stock */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">Pricing & Stock</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Organization */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">Organization</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    {categoryOptions.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Create Product
              </button>
              <button
                type="button"
                className="rounded-md border border-neutral-300 px-6 py-2.5 text-sm font-semibold hover:bg-neutral-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}


export default CreateProduct;