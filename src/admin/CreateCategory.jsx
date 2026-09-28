import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import axios from "axios";


function CreateCategory() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const merchantID = localStorage.getItem("merchant_id");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.name.trim() === "" || formData.image.trim() === "") {
      alert("fields are required to create category")
    } else {
      try {
        const create_category = {
          merchant_id: merchantID,
          name: formData.name,
          image: formData.image,
        };

        console.log("Merchant ID:", merchantID);
        console.log("Category data:", create_category);
        const resp = await axios.post("http://ecommerce.reworkstaging.name.ng/v2/categories", create_category);
        console.log("API Response", resp.data)

        if (resp.data) {
          alert("category created successful")
          localStorage.setItem("category_id", resp.data.id)
        }
      } catch (error) {
        console.log(error)
        console.log("Full error:", error);
        console.log("Server response:", error.response?.data);
        console.log("Status:", error.response?.status);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader title="Create Category" />

        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-xl flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6"
          >
            <div>
              <label className="text-sm font-medium">Category Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Category Image</label>
              <input
                type="url"
                name="image"
                 value={formData.image}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <div className="mt-2 flex gap-3">
              <button
                type="submit"
                className="rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Create Category
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

export default CreateCategory;