import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardCard from "../components/admin/DashboardCard";
import ProductTable from "../components/admin/ProductTable";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const merchantID = localStorage.getItem("merchant_id");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Run both requests at once instead of one after another
        const [productsResp, usersResp] = await Promise.all([
          axios.get(
            `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantID}`
          ),
          axios.get("http://ecommerce.reworkstaging.name.ng/v2/users"),
        ]);

        setProducts(productsResp.data.data || []);
        setTotalUsers(usersResp.data?.length || 0);
      } catch (err) {
        console.log(err);
        setError("Could not load dashboard data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [merchantID]);

  const handleEdit = (id) => {
    // navigation to edit form added later
  };

  const handleDelete = (id) => {
    // delete logic added later
  };

  // Filter by product title (API's real field name) as the user types
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader title="Dashboard" />

        <main className="p-6">
          {error && (
            <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DashboardCard
              title="Total Products"
              value={products.length}
              icon="📦"
              description="Across all categories"
            />
            <DashboardCard
              title="Total Users"
              value={totalUsers}
              icon="👥"
              description="Registered customers"
            />
          </div>

          <div className="mt-8">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Recent Products</h2>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full max-w-xs rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
            </div>

            {isLoading ? (
              <p className="text-sm text-neutral-500">Loading products...</p>
            ) : (
              <ProductTable
                products={filteredProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;