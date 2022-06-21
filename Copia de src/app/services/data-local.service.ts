import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from '../models/producto.models';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  //historial: Registro[]=[];
  historial: Producto[]=[];

  constructor(private navCtrl: NavController) { }

  guardarRegistro(format: string, text: string){
    //cada vez que navegue se va a ir para alla 
    this.navCtrl.navigateForward("/tabs/tab2");

    //const nuevo_registro=new Registro(format,text);
    //this.historial.unshift(nuevo_registro);

    const nuevo_registro=new Producto(text);
    this.historial.unshift(nuevo_registro);
  }
}
