export class Proyecto {
    constructor(
        public id: Number,
        public titulo: string,
        public descripcion: string,
        public slug: string,
        public fechaCreacion: Date,
        public idUsuario: Number
    ){

    }
}