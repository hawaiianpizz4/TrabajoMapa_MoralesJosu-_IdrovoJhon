import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner, private dataLocal:DataLocalService) {}


  //cargando la pagina
  ionViewWillEnter(){
    console.log("TAB1: viewWillEnter, preparando informacion");
  }

  //ya carga toda la pagina
  ionViewDidEnter(){
    console.log("TAB1: ionViewDidEnter, se cargado la pagina");
    this.scann();
  }

  //se saldra de la pagina, es decir, del tab
  ionViewWillLeave(){
    console.log("TAB1: ionViewWillLeave");
  }

  //se salio de la pagina, es decir del tab 
  ionViewDidLeave(){
    console.log("TAB1: ionViewDidLeave");
  }

  //metodo que scanea con barcode scanner 
scann(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);

      //enviar datos a data local
      this.dataLocal.guardarRegistro(barcodeData.format,barcodeData.text);

    }).catch(err => {
      this.dataLocal.guardarRegistro("","c101;teclado;periferico de entrada;GENIUS;10.50;tecnopolis");
        console.log('Error', err);
    });
 
  }

}
