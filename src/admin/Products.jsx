import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import ProductAdminCard from "../components/admin/ProductAdminCard";
import axios from "axios"

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProduct] = useState([])

  const merchantID = localStorage.getItem("merchant_id");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantID}`);
        console.log("API Response:", resp.data.data)
        if (resp.data.data) {
          setProduct(resp.data.data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts();
  }, [])

  const filteredProducts = products.filter((product) => {
    const fullProduct =
      `${product.title} ${product.brand}`.toLowerCase();

    return (
      fullProduct.includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price?.includes(searchTerm)
    );
  });

  const handleEdit = (id) => {
  };

  const handleDelete = (id) => {
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