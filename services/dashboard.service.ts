import axios from 'axios';
import { backend } from '@/lib/endpoints';

interface Dasboard {
    TotalEventos: number; 
    cantidadEventosTerminados: number; 
}

export const DasboardService = {
    totalparticipantes: async (usuarioID: string): Promise<Dasboard> => {
        try {
            const response = await axios.get(`${backend}/api/totalparticipantes/${usuarioID}`);
            console.log(response.data);
            return response.data;  
       
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al obtener los datos');
        }
    },

    cantidadEventosTerminados: async (usuarioID: string): Promise<Dasboard> => {
        try {
            const response = await axios.get(`${backend}/api/cantidadEventosTerminados/${usuarioID}`);
            console.log(response.data);
            return response.data;  
       
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al obtener los datos');
        }
    },
}


