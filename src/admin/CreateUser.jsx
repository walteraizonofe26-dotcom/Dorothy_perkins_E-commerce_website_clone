import { useState } from "react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

 function CreateUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API logic added later
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader title="Create User" />

        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-xl flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <div className="mt-2 flex gap-3">
              <button
                type="submit"
                className="rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Create User
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


export default CreateUser;