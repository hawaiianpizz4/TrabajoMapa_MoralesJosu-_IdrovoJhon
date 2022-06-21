import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';

import { AlertController } from '@ionic/angular';

import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocal:DataLocalService, private alertCtrl: AlertController) {
  }

  abrirRegistro(registro){
    console.log(registro);
  }

  //cargando la pagina
  ionViewWillEnter(){
    console.log("TAB2: viewWillEnter");
  }

  //ya carga toda la pagina
  ionViewDidEnter(){
    console.log("TAB2: ionViewDidEnter");
  }

  
  ionViewWillLeave(){
    console.log("TAB2: ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("TAB2: ionViewDidLeave");
  }


  //crear metodo de alert
  async showAlert(registro:Producto){
    await this.alertCtrl.create({
      header:registro.nombre,
      subHeader: registro.precio,
      message: registro.marca

    }).then(res=> res.present());
  }
}
