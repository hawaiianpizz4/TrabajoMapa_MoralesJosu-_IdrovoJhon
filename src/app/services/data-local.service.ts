import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.models';
/*import { Products } from '../models/productos.models';*/
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[]=[];
  constructor(private navCtrl: NavController, private nativeStorage: NativeStorage, private inAppBrowser: InAppBrowser) { 
    this.cargarDatos();
  }

  async cargarDatos(){
    this.historial=await this.nativeStorage.getItem('registros') || [];
  }
  guardarRegistro(format: string, text: string){
    this.navCtrl.navigateForward("/tabs/tab2");
    const nuevo_registro = new Registro(format,text);
    this.historial.unshift(nuevo_registro);
    this.nativeStorage.setItem('registros',this.historial);
    this.abrirRegistro(nuevo_registro);
    
  }

  abrirRegistro(registro: Registro){
    switch(registro.type){
      case 'http':
        this.inAppBrowser.create(registro.text,'_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`)
    }
  }
  clearRegistro(){
    this.nativeStorage.clear();
  }
}
