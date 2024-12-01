import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function Profile() {
    return (
        <ProtectedRoute>
            <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
                Hola mundo
            </div>
        </ProtectedRoute>
    );
}

