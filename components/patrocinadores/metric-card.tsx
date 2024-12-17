import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react'; // Importa el tipo de icono si quieres tipado estricto

interface MetricCardProps {
    title: string;
    value: string;
    description: string;
    icon: LucideIcon; // El icono ahora es un componente React de Lucide
}

export function MetricCard({ title, value, description, icon: Icon }: MetricCardProps) {
    return (
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {/* Renderiza el icono dinámicamente */}
            <Icon className="h-6 w-6 text-dorado" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <CardDescription>{description}</CardDescription>
        </CardContent>
        </Card>
    );
}
