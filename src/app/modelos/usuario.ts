export class Usuario{
    constructor(
        public id: Number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public contrasena: string,
        public username: string,
        public telefono: string,
        public fechaUltimaSesion: Date,
        public fechaCreacion: Date,
        public puesto: string,
        public foto: string
    ){

    }
}