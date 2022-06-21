export class Producto{
    public codigo:string;
    public nombre:string;
    public tipo:string;
    public marca:string;
    public precio:string;
    public proveedor:string;
    public text:string;

    constructor(text:string){
        this.text=text;
        this.determinarTipo();
    }

    determinarTipo(){
        //extraer partes 
        const splitted = this.text.split(";", 6); 
        this.codigo=splitted[0];
        this.nombre=splitted[1];
        this.tipo=splitted[2];
        this.marca=splitted[3];
        this.precio=splitted[4];
        this.proveedor=splitted[5];
    }
}