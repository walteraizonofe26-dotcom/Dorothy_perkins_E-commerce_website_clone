import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import UserTable from "../components/admin/UserTable";

const allUsers = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@example.com", phone: "+44 7911 123456", status: "Active", dateJoined: "12 Jan 2026" },
  { id: 2, name: "Emma Williams", email: "emma.w@example.com", phone: "+44 7911 234567", status: "Active", dateJoined: "03 Feb 2026" },
  { id: 3, name: "Olivia Brown", email: "olivia.b@example.com", phone: "+44 7911 345678", status: "Inactive", dateJoined: "18 Feb 2026" },
  { id: 4, name: "Ava Davis", email: "ava.d@example.com", phone: "+44 7911 456789", status: "Active", dateJoined: "25 Feb 2026" },
  { id: 5, name: "Sophia Miller", email: "sophia.m@example.com", phone: "+44 7911 567890", status: "Active", dateJoined: "02 Mar 2026" },
  { id: 6, name: "Isabella Wilson", email: "isabella.w@example.com", phone: "+44 7911 678901", status: "Inactive", dateJoined: "10 Mar 2026" },
];

function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <AdminHeader title="Users" />

        <main className="p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search users..."
              className="w-full max-w-xs rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
            />

            <Link
              to="/admin/users/create"
              className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black"
            >
              + Add User
            </Link>
          </div>

          <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}

export default Users;