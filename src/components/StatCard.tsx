interface StatCardProps {
  icon: string;
  value: string | number;
  label: string;
  iconColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function StatCard({ icon, value, label, iconColor = "bg-primary-500", trend }: StatCardProps) {
  return (
    <div className="admin-card admin-card-hover p-6 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`admin-stat-icon ${iconColor}`}>
          {icon}
        </div>
        {trend && (
          <div className={`admin-trend ${trend.isPositive ? "admin-trend-positive" : "admin-trend-negative"}`}>
            <span className="text-sm">{trend.isPositive ? "↑" : "↓"}</span>
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      <h3 className="text-4xl font-bold mb-2 tabular-nums">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </h3>
      <p className="text-sm admin-muted font-medium">{label}</p>
    </div>
  );
}

