
export class producto {

    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public categoria: string,
        public descripcion: string,
        public marca: string,
        public codigo: string,
        public existencia: number,
        public url: string
    ) { }
}