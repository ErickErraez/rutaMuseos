import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Leaflet from 'leaflet';

declare const L: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  map: any;
  data: any;
  estado: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.1836298, -78.4821206], 19);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 19
    }).addTo(this.map);


    //alert on location error
    function onLocationError(e) {
      alert(e.message);
    }
  }

}