 function DashboardCard({ title, value, icon, description }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-500">{title}</p>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      {description && (
        <p className="mt-1 text-xs text-neutral-400">{description}</p>
      )}
    </div>
  );
}

export default DashboardCard;