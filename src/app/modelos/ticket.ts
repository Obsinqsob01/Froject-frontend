export class Ticket {
    constructor(
        public id: Number,
        public titulo: string,
        public contenido: string,
        public foto: string,
        public idUsuario: Number,
        public idProyecto: Number,
        public fecha: Date
    ){

    }
}