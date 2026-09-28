function UserTable({ users, onEdit, onDelete }) {

  const formatDate = (date) => {
    if (!date) {
      return "N/A";
    }

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">

        <thead className="border-b border-neutral-200 bg-neutral-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-neutral-700">
              Name
            </th>

            <th className="px-5 py-4 font-semibold text-neutral-700">
              Email
            </th>

            <th className="px-5 py-4 font-semibold text-neutral-700">
              Phone
            </th>

            <th className="px-5 py-4 font-semibold text-neutral-700">
              Status
            </th>

            <th className="px-5 py-4 font-semibold text-neutral-700">
              Date Joined
            </th>

            <th className="px-5 py-4 font-semibold text-neutral-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
              >

                {/* Name */}
                <td className="px-5 py-4">
                  <div className="font-medium text-neutral-900">
                    {user.first_name} {user.last_name}
                  </div>
                </td>

                {/* Email */}
                <td className="px-5 py-4 text-neutral-600">
                  {user.email}
                </td>

                {/* Phone */}
                <td className="px-5 py-4 text-neutral-600">
                  {user.phone}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </td>

                {/* Date Joined */}
                <td className="px-5 py-4 text-neutral-600">
                  {formatDate(user.created_at)}
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        onEdit && onEdit(user.id)
                      }
                      className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        onDelete && onDelete(user.id)
                      }
                      className="rounded-md border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="px-5 py-10 text-center text-neutral-500"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default UserTable;