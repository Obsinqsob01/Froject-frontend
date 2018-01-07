export class Informe {
    constructor(
        public id: Number,
        public nombre: string,
        public descripcion: string,
        public archivo: string,
        public idUsuario: Number,
        public idProyecto: Number
    ) {

    }
}