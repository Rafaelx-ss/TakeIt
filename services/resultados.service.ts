import axios from 'axios';
import { backend } from '@/lib/endpoints';
import { TopUsuario } from '@/types/resultados'

interface Eventos {
    TotalEventos: number; 
    cantidadEventosTerminados: number; 
    data : []
}

export const ResultadoService = {
    Eventosadmin: async (usuarioID: string): Promise<Eventos> => {
        try {
            const response = await axios.get(`${backend}/api/eventosadmin/${usuarioID}`);
            return response.data;
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al obtener los datos');
        }
    },

    
    duracionEventostotales: async (usuarioID: string): Promise<number> => {
        try {
            const response = await axios.get(`${backend}/api/duracionEventostotales/${usuarioID}`);
            return response.data.data;
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al obtener los datos');
        }
    },

    ParticipanteEvento: async (EventoID: string): Promise<TopUsuario> => {
        try {
            const response = await axios.get(`${backend}/api/ParticipanteEvento/${EventoID}`);
            return response.data.data;
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al obtener los datos');
        }
    },


    
}

