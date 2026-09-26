import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardCard from "../components/admin/DashboardCard";
import ProductTable from "../components/admin/ProductTable";

const recentProducts = [
  { id: 1, name: "Berry Spot Midi Shirt Dress", image: "/images/admin-product-1.jpg", price: "£39.00", quantity: 24, category: "Dresses", status: "Active" },
  { id: 2, name: "Floral Keyhole Midi Dress", image: "/images/admin-product-2.jpg", price: "£35.00", quantity: 12, category: "Dresses", status: "Active" },
  { id: 3, name: "Blue Spot V Neck Midi Dress", image: "/images/admin-product-3.jpg", price: "£31.20", quantity: 0, category: "Dresses", status: "Out of Stock" },
  { id: 4, name: "Tailored Wide Leg Trouser", image: "/images/admin-product-4.jpg", price: "£27.20", quantity: 18, category: "Trousers", status: "Active" },
  { id: 5, name: "Chunky Knit Jumper", image: "/images/admin-product-5.jpg", price: "£26.00", quantity: 30, category: "Knitwear", status: "Active" },
  { id: 6, name: "Cropped Denim Jacket", image: "/images/admin-product-6.jpg", price: "£30.00", quantity: 9, category: "Coats & Jackets", status: "Active" },
  { id: 7, name: "Satin Cami Slip Dress", image: "/images/admin-product-7.jpg", price: "£24.00", quantity: 0, category: "Dresses", status: "Out of Stock" },
  { id: 8, name: "Puff Sleeve Blouse", image: "/images/admin-product-8.jpg", price: "£20.00", quantity: 15, category: "Tops", status: "Active" },
  { id: 9, name: "Ankle Strap Block Heel Sandals", image: "/images/admin-product-9.jpg", price: "£22.00", quantity: 6, category: "Shoes", status: "Active" },
  { id: 10, name: "Belted Trench Coat", image: "/images/admin-product-10.jpg", price: "£55.00", quantity: 11, category: "Coats & Jackets", status: "Active" },
];

function Dashboard() {
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
        <AdminHeader title="Dashboard" />

        <main className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DashboardCard title="Total Products" value="248" icon="📦" description="Across all categories" />
            <DashboardCard title="Total Users" value="1,304" icon="👥" description="Registered customers" />
          </div>

          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">Recent Products</h2>
            <ProductTable products={recentProducts} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </main>
      </div>
    </div>
  );
}


export default Dashboard;