import axios from 'axios';
import { backend } from '@/lib/endpoints';
import { Reporte } from '@/types/reportes';

interface Reportest {
    reportesTotal: number; 
}




export const ReportesService = {
    reportestotales: async (usuarioID: string): Promise<Reportest> => {
        try {
            const response = await axios.get(`${backend}/api/reportes/${usuarioID}`);
            console.log(response.data);

        
            const reportes: Reportest = { reportesTotal: response.data.data };

            return reportes;
        } catch (error) {
            console.error("Error al obtener los reportes:", error);
            throw error; // Para manejar el error en donde se use esta función
        }
    },




    reportesEventos: async (usuarioID: string): Promise<Reporte[]> => {
        try {
            const response = await axios.get(`${backend}/api/reportesEventos/${usuarioID}`);
            return response.data.data;
        } catch (error) {
            console.error("Error al obtener los reportes:", error);
            throw error; 
        }
    },
};
