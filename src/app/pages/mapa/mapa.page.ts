import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
// import {Map} from 'mapbox-gl';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: mapboxgl.Map;
  style='mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y';
  lat: number;
  log:number;
  geo: string;
  geo2:string[];
  // @ViewChild('mapDiv') mapDivElement: ElementRef

  constructor(private route: ActivatedRoute, private router: Router) { 
    mapboxgl.accessToken='pk.eyJ1IjoibGxpb3Rlc3Q0IiwiYSI6ImNsNG15aDR6ejAxcnozY3A0eDJubXl5ajIifQ.arhwf22ZF2YfzV0oykHF9A';
  }

  ngOnInit(){
    
  }
  
  ionViewDidEnter(){
    this.route.paramMap.subscribe(params => {
      this.geo = params.get("geo") // Subscription param
      this.geo=this.geo.substr(4);
      this.geo2=this.geo.split(','); 
      this.lat=+this.geo2[0]; 
      this.log=+this.geo2[1]; 
      console.log(this.geo);
      console.log(this.lat);
      console.log(this.log);
    })

    this.buildMap();
  }
  buildMap(){
    this.map=new mapboxgl.Map({
      container: 'map',
      style:this.style,
      zoom:13,
      center:[this.log,this.lat]
    });
    console.log(this.map);
  }
  // ngAfterViewInit(): void {
  //   const map = new Map({
  //     container: this.mapDivElement.nativeElement, // container ID
  //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 9 // starting zoom
  //     });
  // }


}


