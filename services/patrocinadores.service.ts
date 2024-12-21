import axios from 'axios';
import { backend } from '@/lib/endpoints';
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

// Interfaz para definir los datos del patrocinador
export interface Patrocinador {
    patrocinadorID: number;
    usuarioID: number;
    fotoPatrocinador: string | null; // Base64 o URL de la imagen
    nombrePatrocinador: string;
    representantePatrocinador: string;
    rfcPatrocinador: string;
    correoPatrocinador: string;
    telefonoPatrocinador: string;
    numeroRepresentantePatrocinador: string;
    activoPatrocinador: boolean;
    estadoPatrocinador: boolean;
    createdAt?: string; // Opcional si el backend lo devuelve
    updatedAt?: string; // Opcional si el backend lo devuelve
}

export const PatrocinadoresService = {
    // Obtener patrocinadores con paginación y filtros
    obtenerPatrocinadores: async ({
        usuarioID,
        page = 1,
        itemsPerPage = 10,
    }: {
        usuarioID: number;
        page: number;
        itemsPerPage: number;
    }): Promise<{ patrocinadores: Patrocinador[]; totalItems: number } | undefined> => {
        try {
            const params: any = {
                page: page.toString(),
                itemsPerPage: itemsPerPage.toString(),
            };

            //http://127.0.0.1:8000/api/patrocinadores/1?page=1&itemsPerPage=10
            const response = await axios.get(`${backend}/api/patrocinadores/${usuarioID}`, {
                params,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return {
                patrocinadores: response.data.patrocinadores,
                totalItems: response.data.totalItems,
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                variant: 'destructive',
                title: 'Error al cargar los patrocinadores',
                description: error.response?.data?.message || 'No se pudieron cargar los patrocinadores'
            });
            } else {
                toast({
                variant: 'destructive',
                title: 'Error al cargar los patrocinadores',
                description: 'Ocurrió un error inesperado'
            });
            }
        }
        return undefined;
    },

    // Obtener un patrocinador por ID
    obtenerPatrocinador: async (patrocinadorID: string): Promise<Patrocinador> => {
        try {
            const response = await axios.get(`${backend}/api/patrocinadores/${patrocinadorID}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener el patrocinador:', error);
            throw error;
        }
    },

    // Crear un patrocinador
    crearPatrocinador: async (
        patrocinadorData: Omit<Patrocinador, 'patrocinadorID'>
    ): Promise<Patrocinador> => {
        try {
            const response = await axios.post(`${backend}/api/patrocinadores`, patrocinadorData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al crear el patrocinador:', error);
            throw error;
        }
    },

    // Actualizar un patrocinador existente
    actualizarPatrocinador: async (
        patrocinadorID: string,
        patrocinadorData: Partial<Omit<Patrocinador, 'patrocinadorID'>>
    ): Promise<Patrocinador> => {
        try {
            const response = await axios.put(
                `${backend}/api/patrocinadores/${patrocinadorID}`,
                patrocinadorData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el patrocinador:', error);
            throw error;
        }
    },

    // Eliminar un patrocinador por ID
    eliminarPatrocinador: async (patrocinadorID: string): Promise<void> => {
        try {
            await axios.delete(`${backend}/api/patrocinadores/${patrocinadorID}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error al eliminar el patrocinador:', error);
            throw error;
        }
    },
};