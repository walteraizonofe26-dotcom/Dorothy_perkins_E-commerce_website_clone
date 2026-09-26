function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Phone</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Date Joined</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-neutral-100 last:border-0">
              <td className="px-4 py-3 font-medium">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-neutral-200 text-neutral-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3">{user.dateJoined}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit && onEdit(user.id)}
                    className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete && onDelete(user.id)}
                    className="rounded-md border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default UserTable;