import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";


export default function Home() {
    return (
        <main>
        <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-12">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold tracking-tight mb-6 text-dorado">
                    Descubre y Participa en los Mejores Eventos Deportivos
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Take It es la plataforma perfecta para encontrar, organizar y participar en eventos deportivos.
                    Conecta con otros deportistas y vive experiencias únicas.
                </p>
                <div className="flex gap-4 justify-center">
                <Link href="/events/search">
                    <Button size="lg" className="gap-2">
                        Explorar Eventos <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
                <Link href="/register">
                    <Button size="lg" variant="outline">
                        Crear Cuenta
                    </Button>
                </Link>
                </div>
            </div>
            </div>
        </section>

        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dorado">
                ¿Por qué elegir Take It?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6">
                <Calendar className="w-12 h-12 text-dorado mb-4" />
                <h3 className="text-xl font-semibold mb-2">Eventos Organizados</h3>
                <p className="text-muted-foreground">
                    Gestiona tus inscripciones y mantén un seguimiento de todos tus eventos deportivos.
                </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                <Users className="w-12 h-12 text-dorado mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
                <p className="text-muted-foreground">
                    Conecta con otros deportistas que comparten tus mismos intereses y pasiones.
                </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                <MapPin className="w-12 h-12 text-dorado mb-4" />
                <h3 className="text-xl font-semibold mb-2">Eventos Locales</h3>
                <p className="text-muted-foreground">
                    Encuentra eventos cerca de ti y participa en la comunidad deportiva local.
                </p>
                </div>
            </div>
            </div>
        </section>
        </main>
    );
}
