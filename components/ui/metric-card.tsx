import { type LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function MetricCard({ title, value, description, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}

