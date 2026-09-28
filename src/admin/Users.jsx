import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import UserTable from "../components/admin/UserTable";
import axios from "axios";


function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await axios.get("http://ecommerce.reworkstaging.name.ng/v2/users");
         console.log("API Response:", resp.data)
        if(resp.data){
          setUsers(resp.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser();
  }, [])

    const filteredUsers = users.filter((user) => {
        const fullName =
            `${user.first_name} ${user.last_name}`.toLowerCase();

        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone?.includes(searchTerm)
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
        <AdminHeader title="Users" />

        <main className="p-6">

           <div className="mb-6">
                        <h1 className="text-2xl font-bold text-neutral-900">
                            Users
                        </h1>

                        <p className="mt-1 text-sm text-neutral-500">
                            Manage all customers registered on your website.
                        </p>
                    </div>

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