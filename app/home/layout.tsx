import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Sidebar } from "@/components/sidebar"

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <main>
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

