import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(private barcodeScanner:BarcodeScanner, private dataLocalService:DataLocalService) {}

  ionViewWillEnter(){
    console.log("TAB1: viewWillEnter");
  }
  ionViewDidEnter(){
    console.log("TAB1: viewDidEnter");
    this.scann();
  }
  ionViewWillLeave(){
    console.log("TAB1: viewWillLeave");
  }
  ionViewDidLeave(){
    console.log("TAB1: viewDidLeave");
  }

  scann(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      this.dataLocalService.guardarRegistro(barcodeData.format, barcodeData.text);
     }).catch(err => {
       this.dataLocalService.guardarRegistro('geo','geo:-0.2201641,-78.5123274?q=0.2201641,-78.51');
         console.log('Error', err);
     });
  }


}
