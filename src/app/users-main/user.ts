export class User {
    constructor(
        public id: number,
        public nombre: string,
        public domicilio: string,
        public fecha: Date,
        public cp: number,
        public mail: string,
        public password: string
    ) { }
}
