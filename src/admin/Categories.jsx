import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import CategoryCard from "../components/admin/CategoryCard";

const allCategories = [
  { id: 1, name: "Dresses", image: "/images/admin-category-dresses.jpg", productCount: 84 },
  { id: 2, name: "Tops", image: "/images/admin-category-tops.jpg", productCount: 52 },
  { id: 3, name: "Trousers", image: "/images/admin-category-trousers.jpg", productCount: 37 },
  { id: 4, name: "Knitwear", image: "/images/admin-category-knitwear.jpg", productCount: 29 },
  { id: 5, name: "Coats & Jackets", image: "/images/admin-category-coats-jackets.jpg", productCount: 21 },
  { id: 6, name: "Shoes", image: "/images/admin-category-shoes.jpg", productCount: 45 },
];

function Categories() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    // navigation to edit form added later
  };

  const handleDelete = (id) => {
    // delete logic added later
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader title="Categories" />

        <main className="p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search categories..."
              className="w-full max-w-xs rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
            />

            <Link
              to="/admin/categories/create"
              className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
            >
              + Add Category
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Categories;