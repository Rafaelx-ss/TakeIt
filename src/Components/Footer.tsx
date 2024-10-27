import {Facebook,Instagram,Twitter} from "lucide-react"
const Footer = () => {
    return(
        <section>
            <div className="bg-zinc-800 grid md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6 p-6 space-x-20">
                <div className="">
                <h2 className="font-bold text-xl mr-2 py-4">Sobre Nosotros</h2>
                <p>Take it! Es la plataforma líder para descubrir y unirse a eventos increibles en tu área.</p>
                </div>

                <div className="">
                <h2 className="font-bold text-xl mr-2 py-4">Enlaces Rápidos</h2>
                <p className="py-2">Inicio</p>
                <p className="py-2">Explorar Eventos</p>
                <p className="py-2">Crear Evento</p>
                <p className="py-2">Mi cuenta</p>
                </div>

                <div className="">
                <h2 className="font-bold text-xl mr-2 py-4">Soporte</h2>
                <p className="py-2">FAQ</p>
                <p className="py-2">Contactanos</p>
                <p className="py-2">Trabaja con nostros</p>
                <p className="py-2">Política de privacidad</p>
                <p className="py-2">Términos de servicio</p>
                </div>

                <div className="">
                <h2 className="font-bold text-xl mr-2 py-4">Siguenos</h2>
                    <div className="flex items-center space-x-2">
                    <Facebook/>
                    <Instagram />
                    <Twitter />
                    </div>
                </div>

               
            </div>

            
        </section>
    )
}

export default Footer;