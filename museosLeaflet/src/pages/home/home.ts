import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  data: any;
  estado: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {

    this.drawMap();
    
    //web location
    this.map.locate({ setView: true });
  }

  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.1836298, -78.4821206], 18);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

      maxZoom: 18
    }).addTo(this.map);


    var map = this.map;

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
