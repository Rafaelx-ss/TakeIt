import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell, User } from "lucide-react";

const Footer = () => {
  return (
    <div className=" text-white py-6 px-8">
      <div className="flex justify-center space-x-8">
        {/* Eventos recientes */}
        <Card className="bg-neutral-800 text-white shadow-lg rounded-lg w-96 h-auto">
          <CardHeader>
            <CardTitle className="text-xl">Eventos recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Evento 1 */}
              <div className="bg-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold">I6 - 2024</h3>
                <p className="text-sm text-gray-400">123 participantes</p>
                <p className="text-xs text-gray-500 mt-1">06/09/2024</p>
              </div>
              <div className="bg-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold">Ruta paseo de Montejo</h3>
                <p className="text-sm text-gray-400">77 participantes</p>
                <p className="text-xs text-gray-500 mt-1">06/09/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notificaciones */}
        <Card className="bg-neutral-800 text-white shadow-lg rounded-lg w-96 h-auto">
          <CardHeader>
            <CardTitle className="text-xl">Notificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-neutral-700 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nuevo registro</h3>
                    <p className="text-sm text-gray-400">
                      Nuevo participante registrado a "Ruta paseo de Montejo"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-700 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Recuerdo de evento</h3>
                    <p className="text-sm text-gray-400">
                      El evento "I6 - 2024" inicia en 2 días.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Hace 5 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
