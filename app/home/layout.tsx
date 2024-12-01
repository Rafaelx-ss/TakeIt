import { ProtectedRoute } from '@/components/ProtectedRoute';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div>
        {children}
      </div>
    </ProtectedRoute>
  );
}