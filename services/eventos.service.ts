import axios from 'axios';
import { Evento } from '@/types/eventos'
import { backend } from '@/lib/endpoints';

export const EventosService = {
    obtenerEventos: async ({
        usuarioID,
        page = 1,
        itemsPerPage = 10,
        sortColumn = null,
        sortDirection = 'asc'
    }: {
        usuarioID: number,
        page: number,
        itemsPerPage: number,
        sortColumn: keyof Evento | null,
        sortDirection: 'asc' | 'desc'
    }): Promise<{ eventos: Evento[], totalItems: number }> => {
        try {
        const params: any = {
            page: page.toString(),
            itemsPerPage: itemsPerPage.toString(),
            sortDirection: sortDirection
        };

        if (sortColumn) {
            params.sortColumn = sortColumn;
        }

        const response = await axios.get(`${backend}/api/eventos/miseventos/${usuarioID}`, {
            params,
            headers: {
            'Content-Type': 'application/json'
            }
        });

        return {
            eventos: response.data.eventos,
            totalItems: response.data.totalItems
        };

        } catch (error) {
        console.error('Error en el servicio de eventos:', error);
        throw error;
        }
    },

    obtenerEvento: async (eventoID: string): Promise<Evento> => {
        try {
        const response = await axios.get(`${backend}/api/eventos1/${eventoID}`, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
        } catch (error) {
        console.error('Error al obtener el evento:', error);
        throw error;
        }
    },

    crearEvento: async (eventoData: Omit<Evento, 'eventoID'>): Promise<Evento> => {
        try {
        const response = await axios.post(`${backend}/api/eventos2`, eventoData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
        } catch (error) {
        console.error('Error al crear el evento:', error);
        throw error;
        }
    },

    actualizarEvento: async (eventoID: string, eventoData: Partial<Evento>): Promise<Evento> => {
        try {
        const response = await axios.put(`${backend}/api/eventos3/${eventoID}`, eventoData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
        } catch (error) {
        console.error('Error al actualizar el evento:', error);
        throw error;
        }
    },

    eliminarEvento: async (eventoID: string): Promise<void> => {
        try {
        await axios.delete(`${backend}/api/eventos4/${eventoID}`, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        } catch (error) {
        console.error('Error al eliminar el evento:', error);
        throw error;
        }
    }
};



// EVENTOS ESTATICOS (YA NO SE USAN): 
// const mockEventos: Evento[] = [
//     {
//         eventosID: 1,
//         nombreEvento: "Conferencia de Tecnología",
//         fechaEvento: "2024-12-15",
//         horaEvento: "09:00:00",
//         lugarEvento: "Centro de Convenciones Mérida",
//         direccionEvento: "Avenida Tecnológica #500",
//         costoEvento: 250.00,
//         maximoParticipantesEvento: "500",
//         activoEvento: true
//     },
//     {
//         eventosID: 2,
//         nombreEvento: "Taller de Fotografía",
//         fechaEvento: "2024-12-20",
//         horaEvento: "15:00:00",
//         lugarEvento: "Casa de la Cultura",
//         direccionEvento: "Calle Arte #200 x 45 y 47",
//         costoEvento: 150.00,
//         maximoParticipantesEvento: "30",
//         activoEvento: true
//     },
//     {
//         eventosID: 3,
//         nombreEvento: "Concierto de Rock",
//         fechaEvento: "2024-12-31",
//         horaEvento: "22:00:00",
//         lugarEvento: "Parque Central",
//         direccionEvento: "Plaza Principal",
//         costoEvento: 300.00,
//         maximoParticipantesEvento: "1000",
//         activoEvento: false
//     },
//     {
//         eventosID: 4,
//         nombreEvento: "Exposición de Arte Moderno",
//         fechaEvento: "2024-12-10",
//         horaEvento: "10:00:00",
//         lugarEvento: "Museo de Arte Contemporáneo",
//         direccionEvento: "Avenida Cultura #123",
//         costoEvento: 75.00,
//         maximoParticipantesEvento: "200",
//         activoEvento: false
//     },
//     {
//         eventosID: 5,
//         nombreEvento: "Maratón Anual",
//         fechaEvento: "2025-01-05",
//         horaEvento: "06:00:00",
//         lugarEvento: "Estadio Olímpico",
//         direccionEvento: "Circuito Deportivo",
//         costoEvento: 50.00,
//         maximoParticipantesEvento: "1000",
//         activoEvento: true
//     },
//     {
//         eventosID: 6,
//         nombreEvento: "Clase de Yoga al Aire Libre",
//         fechaEvento: "2024-12-17",
//         horaEvento: "07:30:00",
//         lugarEvento: "Parque de la Salud",
//         direccionEvento: "Calle Verde #45",
//         costoEvento: 0.00,
//         maximoParticipantesEvento: "50",
//         activoEvento: true
//     },
//     {
//         eventosID: 7,
//         nombreEvento: "Feria Gastronómica",
//         fechaEvento: "2024-12-25",
//         horaEvento: "12:00:00",
//         lugarEvento: "Plaza de la Comida",
//         direccionEvento: "Mercado Principal",
//         costoEvento: 20.00,
//         maximoParticipantesEvento: "300",
//         activoEvento: false
//     },
//     {
//         eventosID: 8,
//         nombreEvento: "Charla Motivacional",
//         fechaEvento: "2024-12-18",
//         horaEvento: "18:00:00",
//         lugarEvento: "Auditorio Municipal",
//         direccionEvento: "Calle Esperanza #33",
//         costoEvento: 200.00,
//         maximoParticipantesEvento: "100",
//         activoEvento: true
//     },
//     {
//         eventosID: 9,
//         nombreEvento: "Noche de Cine al Aire Libre",
//         fechaEvento: "2024-12-22",
//         horaEvento: "20:30:00",
//         lugarEvento: "Parque de los Sueños",
//         direccionEvento: "Calle Fantasía #99",
//         costoEvento: 10.00,
//         maximoParticipantesEvento: "150",
//         activoEvento: true
//     },
//     {
//         eventosID: 10,
//         nombreEvento: "Curso Intensivo de Programación",
//         fechaEvento: "2025-01-15",
//         horaEvento: "09:00:00",
//         lugarEvento: "Escuela de Software",
//         direccionEvento: "Avenida Código #777",
//         costoEvento: 500.00,
//         maximoParticipantesEvento: "40",
//         activoEvento: false
//     },
//     {
//         eventosID: 11,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 12,
//         nombreEvento: "Maratón de Ciclismo",
//         fechaEvento: "2025-02-20",
//         horaEvento: "08:00:00",
//         lugarEvento: "Calle Libre",
//         direccionEvento: "Calle del Deportista #10",
//         costoEvento: 100.00,
//         maximoParticipantesEvento: "1500",
//         activoEvento: false
//     },
//     {
//         eventosID: 13,
//         nombreEvento: "Festival Gastronómico Internacional",
//         fechaEvento: "2025-03-15",
//         horaEvento: "11:00:00",
//         lugarEvento: "Plaza del Sol",
//         direccionEvento: "Avenida Gusto #300",
//         costoEvento: 80.00,
//         maximoParticipantesEvento: "2000",
//         activoEvento: true
//     },
//     {
//         eventosID: 14,
//         nombreEvento: "Exhibición de Autos Clásicos",
//         fechaEvento: "2025-04-10",
//         horaEvento: "09:00:00",
//         lugarEvento: "Parque Automovilístico",
//         direccionEvento: "Avenida Clásica #50",
//         costoEvento: 120.00,
//         maximoParticipantesEvento: "800",
//         activoEvento: false
//     },
//     {
//         eventosID: 15,
//         nombreEvento: "Festival de Danza Folklórica",
//         fechaEvento: "2025-05-01",
//         horaEvento: "17:00:00",
//         lugarEvento: "Teatro Nacional",
//         direccionEvento: "Calle Tradición #400",
//         costoEvento: 150.00,
//         maximoParticipantesEvento: "500",
//         activoEvento: true
//     },
//     {
//         eventosID: 16,
//         nombreEvento: "Conferencia de Innovación en Salud",
//         fechaEvento: "2025-06-10",
//         horaEvento: "08:30:00",
//         lugarEvento: "Centro de Convenciones",
//         direccionEvento: "Avenida de la Salud #250",
//         costoEvento: 250.00,
//         maximoParticipantesEvento: "1000",
//         activoEvento: false
//     },
//     {
//         eventosID: 17,
//         nombreEvento: "Encuentro de Emprendedores",
//         fechaEvento: "2025-07-05",
//         horaEvento: "10:00:00",
//         lugarEvento: "Auditorio Principal",
//         direccionEvento: "Calle Innovación #150",
//         costoEvento: 200.00,
//         maximoParticipantesEvento: "300",
//         activoEvento: true
//     },
//     {
//         eventosID: 18,
//         nombreEvento: "Exposición de Fotografía Contemporánea",
//         fechaEvento: "2025-08-20",
//         horaEvento: "18:00:00",
//         lugarEvento: "Galería de Arte",
//         direccionEvento: "Calle Arte #500",
//         costoEvento: 50.00,
//         maximoParticipantesEvento: "100",
//         activoEvento: false
//     },
//     {
//         eventosID: 19,
//         nombreEvento: "Feria Internacional del Libro",
//         fechaEvento: "2025-09-01",
//         horaEvento: "09:00:00",
//         lugarEvento: "Centro Cultural",
//         direccionEvento: "Calle Literatura #75",
//         costoEvento: 30.00,
//         maximoParticipantesEvento: "2000",
//         activoEvento: true
//     },
//     {
//         eventosID: 20,
//         nombreEvento: "Campamento de Aventura",
//         fechaEvento: "2025-10-10",
//         horaEvento: "08:00:00",
//         lugarEvento: "Parque Natural",
//         direccionEvento: "Camino del Bosque #600",
//         costoEvento: 120.00,
//         maximoParticipantesEvento: "100",
//         activoEvento: false
//     },
//     {
//         eventosID: 21,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 22,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 23,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 24,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: false
//     },
//     {
//         eventosID: 25,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: false
//     },
//     {
//         eventosID: 26,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: false
//     },
//     {
//         eventosID: 27,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: false
//     },
//     {
//         eventosID: 28,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 29,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 30,
//         nombreEvento: "Festival de Música Electrónica",
//         fechaEvento: "2025-02-05",
//         horaEvento: "19:00:00",
//         lugarEvento: "Arena de Eventos",
//         direccionEvento: "Avenida Electrónica #100",
//         costoEvento: 350.00,
//         maximoParticipantesEvento: "3000",
//         activoEvento: true
//     },
//     {
//         eventosID: 31,
//         nombreEvento: "Concierto de Jazz",
//         fechaEvento: "2025-03-15", 
//         horaEvento: "20:00:00",
//         lugarEvento: "Teatro Principal",
//         direccionEvento: "Calle Teatro #123",
//         costoEvento: 200.00,
//         maximoParticipantesEvento: "500",
//         activoEvento: true
//     },
//     {
//         eventosID: 32,
//         nombreEvento: "Festival Gastronómico",
//         fechaEvento: "2025-04-01",
//         horaEvento: "12:00:00", 
//         lugarEvento: "Plaza Central",
//         direccionEvento: "Centro Histórico",
//         costoEvento: 100.00,
//         maximoParticipantesEvento: "1000",
//         activoEvento: true
//     },
//     {
//         eventosID: 33,
//         nombreEvento: "Exposición de Fotografía",
//         fechaEvento: "2025-03-20",
//         horaEvento: "10:00:00",
//         lugarEvento: "Galería de Arte",
//         direccionEvento: "Av. Cultura #456",
//         costoEvento: 50.00,
//         maximoParticipantesEvento: "200",
//         activoEvento: true
//     },
//     {
//         eventosID: 34,
//         nombreEvento: "Torneo de Ajedrez",
//         fechaEvento: "2025-05-10",
//         horaEvento: "09:00:00",
//         lugarEvento: "Club Social",
//         direccionEvento: "Calle Deportes #789",
//         costoEvento: 75.00,
//         maximoParticipantesEvento: "100",
//         activoEvento: false
//     },
//     {
//         eventosID: 35,
//         nombreEvento: "Festival de Danza",
//         fechaEvento: "2025-06-15",
//         horaEvento: "19:00:00",
//         lugarEvento: "Auditorio Municipal",
//         direccionEvento: "Av. Principal #321",
//         costoEvento: 150.00,
//         maximoParticipantesEvento: "800",
//         activoEvento: true
//     },
//     {
//         eventosID: 36,
//         nombreEvento: "Conferencia de Negocios",
//         fechaEvento: "2025-07-01",
//         horaEvento: "08:00:00",
//         lugarEvento: "Hotel Business",
//         direccionEvento: "Av. Empresarial #999",
//         costoEvento: 300.00,
//         maximoParticipantesEvento: "400",
//         activoEvento: true
//     },
//     {
//         eventosID: 37,
//         nombreEvento: "Feria del Libro",
//         fechaEvento: "2025-08-15",
//         horaEvento: "11:00:00",
//         lugarEvento: "Centro de Convenciones",
//         direccionEvento: "Calle Literatura #777",
//         costoEvento: 0.00,
//         maximoParticipantesEvento: "2000",
//         activoEvento: true
//     },
//     {
//         eventosID: 38,
//         nombreEvento: "Concierto Sinfónico",
//         fechaEvento: "2025-09-20",
//         horaEvento: "20:30:00",
//         lugarEvento: "Sala de Conciertos",
//         direccionEvento: "Av. Música #444",
//         costoEvento: 250.00,
//         maximoParticipantesEvento: "600",
//         activoEvento: true
//     },
//     {
//         eventosID: 39,
//         nombreEvento: "Festival de Cine",
//         fechaEvento: "2025-10-05",
//         horaEvento: "16:00:00",
//         lugarEvento: "Cineplex Central",
//         direccionEvento: "Plaza Cinema #555",
//         costoEvento: 180.00,
//         maximoParticipantesEvento: "300",
//         activoEvento: true
//     },
//     {
//         eventosID: 40,
//         nombreEvento: "Expo Tecnología",
//         fechaEvento: "2025-11-15",
//         horaEvento: "09:00:00",
//         lugarEvento: "Centro Tech",
//         direccionEvento: "Av. Innovación #888",
//         costoEvento: 400.00,
//         maximoParticipantesEvento: "1500",
//         activoEvento: false
//     }

// ];