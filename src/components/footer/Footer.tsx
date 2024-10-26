import React from "react";
import RedesSociales from './RedesSociales';
import TakeItLogo from "./TakeItLogo";

const Footer: React.FC = () => {
    return (
        <footer className="bg-background dark:bg-gray-100">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    
                    <TakeItLogo/>

                    <p className="mt-4 max-w-xs text-text dark:text-gray-400">
                    Take it! es la plataforma líder para descubrir y unirse a eventos increíbles en tu área.
                    </p>

                    <ul className="mt-8 flex gap-6">
                        <RedesSociales/>
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                    <div>
                    <p className="font-medium text-accent dark:text-white">Enlaces Rápidos</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Inicio
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Mi Cuenta
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Crear Evento
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Explorar Eventos
                        </a>
                        </li>

                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-accent dark:text-white">Company</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Equipo
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Sobre Nosotros
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Revisión De Cuentas
                        </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-accent dark:text-white">Soporte</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            FAQ
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Contactanos
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Términos De Servicio
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Trabaja Con Nosotros
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Politicas De Privacidad
                        </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-accent dark:text-white">Legal</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Accessibilidad
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Política de reembolso
                        </a>
                        </li>

                        <li>
                        <a href="#" className="text-text transition hover:opacity-75 dark:text-gray-200">
                            Estadísticas de contratación
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <p className="text-xs text-accent dark:text-gray-400">
                &copy; 2024. Take It!. Todos Los Derechos Reservados.
                </p>
            </div>
            </footer>
    );
};

export default Footer;