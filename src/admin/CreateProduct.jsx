import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import axios from "axios";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    images: "",
    price: "",
    quantity: "",
    description: "",
    brand: "",
    category: "",
    currency: "",
  });

  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };
  // Get all categories belonging to this merchant
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const merchantID = localStorage.getItem("merchant_id");
        const resp = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantID}`
        );
        console.log("Categories:", resp.data);
        if (resp.data) {
          setCategories(resp.data);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.description.trim() === "" ||
      formData.images.trim() === "" ||
      formData.price.trim() === "" ||
      formData.brand.trim() === "" ||
      formData.category.trim() === "" ||
      formData.currency.trim() === "" ||
      formData.quantity.trim() === ""
    ) {
      alert("All fields are required");
    } else {
      try {
        const create_product = {
          title: formData.name,
          descp: formData.description,
          images: formData.images.split(",").map((url) => url.trim()),
          price: Number(formData.price),
          brand: formData.brand,
          currency: formData.currency,
          quantity: Number(formData.quantity),
          merchant_id: localStorage.getItem("merchant_id"),
          category_id: formData.category,
        };

        console.log("Product data:", create_product);

        const resp = await axios.post(
          "http://ecommerce.reworkstaging.name.ng/v2/products",
          create_product
        );
        console.log("API Response:", resp.data);

        if (resp.data.id) {
          alert("Product created successfully");
          // Clear form after successful creation
          setFormData({
            name: "",
            images: "",
            price: "",
            quantity: "",
            description: "",
            brand: "",
            category: "",
            currency: "",
          });
        }
      } catch (error) {
        console.log("Full error:", error);
        console.log(
          "Server response:",
          error.response?.data
        );
        console.log(
          "Status:",
          error.response?.status
        );
      }
    }
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
            {/* Basic Information */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">
                Basic Information
              </h2>

              <div className="flex flex-col gap-4">
                {/* Product Name */}
                <div>
                  <label className="text-sm font-medium">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                {/* Product Image */}
                <div>
                  <label className="text-sm font-medium">
                    Product Image
                  </label>

                  <input
                    type="url"
                    name="images"
                    value={formData.images}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium">
                    Description
                  </label>

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

            {/* Pricing & Stock */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">
                Pricing & Stock
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Price */}
                <div>
                  <label className="text-sm font-medium">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                {/* Currency */}
                <div>
                  <label className="text-sm font-medium">
                    Currency
                  </label>

                  <input
                    type="text"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    placeholder="NGN"
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium">
                    Quantity
                  </label>

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
              <h2 className="mb-4 text-sm font-semibold text-neutral-500">
                Organization
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Brand */}
                <div>
                  <label className="text-sm font-medium">
                    Brand
                  </label>

                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                  >
                    <option value="" disabled>
                      Select category
                    </option>

                    {categories.map((cat) => (
                      <option
                        key={cat.id}
                        value={cat.id}
                      >
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Buttons */}
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