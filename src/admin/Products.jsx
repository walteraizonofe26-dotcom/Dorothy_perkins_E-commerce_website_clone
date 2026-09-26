import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import ProductAdminCard from "../components/admin/ProductAdminCard";

const allProducts = [
  { id: 1, name: "Berry Spot Midi Shirt Dress", description: "Lightweight woven midi dress", image: "/images/admin-product-1.jpg", price: "£39.00", quantity: 24, category: "Dresses", status: "Active" },
  { id: 2, name: "Floral Keyhole Midi Dress", description: "Long sleeve keyhole neckline", image: "/images/admin-product-2.jpg", price: "£35.00", quantity: 12, category: "Dresses", status: "Active" },
  { id: 3, name: "Blue Spot V Neck Midi Dress", description: "Polka dot print, V neckline", image: "/images/admin-product-3.jpg", price: "£31.20", quantity: 0, category: "Dresses", status: "Out of Stock" },
  { id: 4, name: "Tailored Wide Leg Trouser", description: "High rise, wide leg fit", image: "/images/admin-product-4.jpg", price: "£27.20", quantity: 18, category: "Trousers", status: "Active" },
  { id: 5, name: "Chunky Knit Jumper", description: "Oversized fit, ribbed cuffs", image: "/images/admin-product-5.jpg", price: "£26.00", quantity: 30, category: "Knitwear", status: "Active" },
  { id: 6, name: "Cropped Denim Jacket", description: "Classic wash, button front", image: "/images/admin-product-6.jpg", price: "£30.00", quantity: 9, category: "Coats & Jackets", status: "Active" },
  { id: 7, name: "Satin Cami Slip Dress", description: "Adjustable straps, bias cut", image: "/images/admin-product-7.jpg", price: "£24.00", quantity: 0, category: "Dresses", status: "Out of Stock" },
  { id: 8, name: "Puff Sleeve Blouse", description: "Round neck, puff sleeve detail", image: "/images/admin-product-8.jpg", price: "£20.00", quantity: 15, category: "Tops", status: "Active" },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <AdminHeader title="Products" />

        <main className="p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full max-w-xs rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
            />

            <Link
              to="/admin/products/create"
              className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
            >
              + Add Product
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductAdminCard
                key={product.id}
                product={product}
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

export default Products;