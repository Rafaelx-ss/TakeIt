import axios from 'axios';
import { backend } from '@/lib/endpoints';
import { Patrocinador } from '@/types/patrocinadores';

export const PatrocinadoresService = {
    obtenerPatrocinadores: async (usuarioID: string): Promise<{ patrocinadores: Patrocinador[], totalPatrocinadores: number } | undefined> => {
        try {
            const response = await axios.get(`${backend}/api/patrocinadores/${usuarioID}`, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200 && Array.isArray(response.data.data)) {
                return {
                    patrocinadores: response.data.data.map((patrocinador: Patrocinador) => ({
                        ...patrocinador,
                        image_url: patrocinador.image_url || null, 
                    })),
                    totalPatrocinadores: response.data.totalPatrocinadores
                };
            } else {
                console.error('Respuesta inesperada del servidor:', response.data);
                return undefined;
            }
        } catch (error: any) {
            console.error('Error al obtener los patrocinadores:', error.message || error);
        }

        return undefined;
    },

    // Eliminar un patrocinador (cambiar estado a inactivo)
    eliminarPatrocinador: async (patrocinadorID: string): Promise<void> => {
        try {
            await axios.delete(`${backend}/api/patrocinadores/delete/${patrocinadorID}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("correcto");
        } catch (error) {
            console.log(error);
        }
    },

////////////////////////////////////////

    // Crear un patrocinador
    crearPatrocinador: async (
        patrocinadorData: Omit<Patrocinador, 'patrocinadorID'>
    ): Promise<Patrocinador | undefined> => {
        try {
            const formData = new FormData();
            for (const [key, value] of Object.entries(patrocinadorData)) {
                formData.append(key, value as string | Blob);
            }

            const response = await axios.post(`${backend}/api/patrocinadores`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
        return undefined;
    },

    // Obtener un patrocinador por ID
    obtenerPatrocinador: async (patrocinadorID: string): Promise<Patrocinador | undefined> => {
        try {
            const response = await axios.get(`${backend}/api/patrocinadores/${patrocinadorID}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
        return undefined;
    },

    // Actualizar un patrocinador existente
    actualizarPatrocinador: async (
        patrocinadorID: string,
        patrocinadorData: Partial<Omit<Patrocinador, 'patrocinadorID'>>
    ): Promise<Patrocinador | undefined> => {
        try {
            const response = await axios.put(
                `${backend}/api/patrocinadores/${patrocinadorID}`,
                patrocinadorData,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
        return undefined;
    },

    // Alternar el estado activo/inactivo del patrocinador
    alternarEstado: async (patrocinadorID: string): Promise<void> => {
        try {
            await axios.post(`${backend}/api/patrocinadores/toggle/${patrocinadorID}`, null, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("correcto");
        } catch (error) {
            console.log(error);
        }
    },

    // Filtrar patrocinadores
    filtrarPatrocinadores: async (filtros: Record<string, any>): Promise<Patrocinador[] | undefined> => {
        try {
            const response = await axios.get(`${backend}/api/patrocinadores/filter`, {
                params: filtros,
                headers: { 'Content-Type': 'application/json' },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
        return undefined;
    },
};
