import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Products", path: "/admin/products" },
  { name: "Create Product", path: "/admin/products/create" },
  { name: "Users", path: "/admin/users" },
  { name: "Create User", path: "/admin/users/create" },
  { name: "Categories", path: "/admin/categories" },
  { name: "Create Category", path: "/admin/categories/create" },
];

 function AdminSidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col justify-between border-r border-neutral-200 bg-white">
      <div>
        <div className="border-b border-neutral-200 px-6 py-5">
          <span className="text-xl font-black tracking-tight">DP. Admin</span>
        </div>

        <nav className="mt-4 flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-1 border-t border-neutral-200 px-3 py-4">
        <button className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-neutral-600 hover:bg-neutral-100">
          Settings
        </button>
        <button className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50">
          Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar