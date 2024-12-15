import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import SocialButton from '@/components/ui/SocialButton';

const Footer = () => {
  return (
    <footer className="bg-secondary text-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-sm">Take it! es la plataforma líder para descubrir y unirse a eventos increíbles en tu área.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-dorado">Inicio</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Explorar Eventos</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Crear Evento</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Mi Cuenta</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-dorado">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Contacto</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Política de Privacidad</a></li>
              <li><a href="#" className="text-sm hover:text-dorado">Términos de Servicio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <SocialButton title="Facebook" icon={<Facebook size={24} />} />
              <SocialButton title="Instagram" icon={<Instagram size={24} />} />
              <SocialButton title="Twitter" icon={<Twitter size={24} />} />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2024 Take it! Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer