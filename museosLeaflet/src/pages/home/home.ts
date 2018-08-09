import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


import * as Leaflet from 'leaflet';
import 'leaflet-draw';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  map: any;

  constructor( public navCtrl: NavController, public geolocation: Geolocation) {
  }

  ngOnInit(): void {

    this.getLocation();

  }


  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      var x = resp.coords.latitude;
      var y = resp.coords.longitude;

      this.map = Leaflet.map('map').setView([x, y], 18);
      Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

        maxZoom: 18
      }).addTo(this.map);

      Leaflet.marker([x, y]).addTo(this.map)
        .bindPopup("Tu Ubicacion").openPopup();

    })
  }




}

