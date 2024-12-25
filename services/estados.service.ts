import axios from 'axios';
import { backend } from '@/lib/endpoints';
import { Estado } from '@/types/estados';

export const EstadosService = {
    obtenerEstados: async (): Promise<Estado[]> => {
        const response = await axios.get(`${backend}/api/estados`);
        return response.data;
    }
}
