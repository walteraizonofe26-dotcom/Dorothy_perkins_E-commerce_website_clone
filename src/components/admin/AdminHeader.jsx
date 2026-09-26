 function AdminHeader({ title }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 bg-white px-6 py-4">
      <h1 className="text-lg font-semibold">{title}</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden w-56 rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none md:block"
        />

        <button aria-label="Notifications" className="relative text-xl">
          🔔
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/images/admin-avatar.jpg"
            alt="Admin avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden text-sm font-medium sm:block">Admin User</span>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;