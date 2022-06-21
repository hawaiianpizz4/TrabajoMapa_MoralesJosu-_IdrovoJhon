import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Products } from '../models/productos.models';
import { AlertController } from '@ionic/angular';
import { Registro } from '../models/registro.models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocal: DataLocalService, private alertController: AlertController) {}

  abrirRegistro(registro){
    console.log(registro);
    this.dataLocal.abrirRegistro(registro);
  }

  ionViewWillEnter(){
    console.log("TAB2: viewWillEnter");
  }
  ionViewDidEnter(){
    console.log("TAB2: viewDidEnter");
  }
  ionViewWillLeave(){
    console.log("TAB2: viewWillLeave");
  }
  ionViewDidLeave(){
    console.log("TAB2: viewDidLeave");
  }

  async mostrarDatos(registro:Products){
    await this.alertController.create({
      header: registro.nombre,
      subHeader:registro.precio,
      message:registro.marca
    }).then(res=>res.present());
  }
}
