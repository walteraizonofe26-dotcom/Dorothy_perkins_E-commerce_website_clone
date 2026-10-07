import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import ProductAdminCard from "../components/admin/ProductAdminCard";
import EditProductModal from "../components/admin/EditProductModal";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const merchantID = localStorage.getItem("merchant_id");

  const fetchProducts = async () => {
    try {
      const resp = await axios.get(
        `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantID}`
      );
      if (resp.data.data) {
        setProducts(resp.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const fullProduct = `${product.title} ${product.brand}`.toLowerCase();

    return (
      fullProduct.includes(searchTerm.toLowerCase()) ||
      product.descp?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(product.price)?.includes(searchTerm)
    );
  });

  // Passes the whole product (not just the id) so the modal can pre-fill its fields
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://ecommerce.reworkstaging.name.ng/v2/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Could not delete product. Please try again.");
    }
  };

  const handleUpdated = () => {
    setEditingProduct(null);
    fetchProducts();
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

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdated={handleUpdated}
        />
      )}
    </div>
  );
}

export default Products;