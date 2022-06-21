import { Tab1PageRoutingModule } from '../tab1/tab1-routing.module';
export class Products{
    public codigo :string;
    public nombre :string;
    public tipo :string;
    public marca :string;
    public proveedor :string;
    public precio :string;
    public texto :string;

    constructor(texto:string){
        this.texto=texto;
        this.separador();
    
    }

    separador(){
        const texto_separado=this.texto.split(';');
        this.codigo=texto_separado[0];
        this.nombre=texto_separado[1];
        this.tipo=texto_separado[2];
        this.marca=texto_separado[3];
        this.precio=texto_separado[4];
        this.proveedor=texto_separado[5];
    }



}

