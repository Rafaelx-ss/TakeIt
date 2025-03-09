export interface Reporte {
    reporteID: number;
    eventoID: number;
    Tipo: string;
    usuarioID: number;
    created_at: string;
    descripcion: string | number;
    detalle: string | number;
    nombreEvento: string;
    nombreUsuario: string;
    activoReporte: number;
}
