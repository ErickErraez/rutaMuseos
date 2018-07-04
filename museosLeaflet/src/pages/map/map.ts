import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';

//declare const L: any;

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
    this.map = Leaflet.map('map').setView([-0.1836298, -78.4821206], 18);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);


    var map = this.map;

    //web location
    map.locate({ setView: true });

    //when we have a location draw a marker
    function onLocationFound(e) {

      Leaflet.marker(e.latlng).addTo(map)
        .bindPopup('Estas Aqui').openPopup();
    }
    map.on('locationfound', onLocationFound);

    //alert on location error
    function onLocationError(e) {
      alert(e.message);
    }

    this.map.on('locationerror', onLocationError);
  }


}