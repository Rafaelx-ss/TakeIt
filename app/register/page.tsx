import { RegisterForm } from '@/components/auth/register-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Crear Cuenta</CardTitle>
        </CardHeader>
        <CardContent >
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}