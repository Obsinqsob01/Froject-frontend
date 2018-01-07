export class Apunte {
    constructor(
        public id: Number,
        public titulo: string,
        public contenido: string,
        public idUsuario: Number,
        public idProyecto: Number,
        public publico: Boolean
    ){

    }
}