import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Headers, Http, RequestOptions } from '@angular/http';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });
  url: any = 'http://localhost/Webservice/server/index.php/welcome/getmuseo';
  map: any;
  propertyList: any = [];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit(): void {

    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.1836298, -78.4821206], 18);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Realizado por Bryan y Erick',
      maxZoom: 18,
    }).addTo(this.map);

    var map = this.map;

    //web location
    map.locate({ setView: true, maxZoom: 18 });

    function onLocationFound(e) {
      var iconoRojo = Leaflet.icon({
        iconUrl: '../assets/img/markerRed.png',
        iconSize: [38, 42], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -88] // point from which the popup should open relative to the iconAnchor
      })
      Leaflet.marker(e.latlng, { icon: iconoRojo }).addTo(map)
        .bindPopup("Tu Ubicacion").openPopup();
    }

    map.on('locationfound', onLocationFound);

    //alert on location error
    function onLocationError(e) {
      alert(e.message);
    }

    this.map.on('locationerror', onLocationError);
  }

  getMuseums() {

    this.http.get(this.url).subscribe(respuesta => {
      console.log(JSON.stringify(respuesta.json()));
      this.propertyList = respuesta.json();
      for (var i = 0; i < this.propertyList.length; i++) {
        Leaflet.marker([this.propertyList[i].latitud, this.propertyList[i].longitud]).addTo(this.map)
          .bindPopup(this.propertyList[i].nombre).openPopup()
      }
    }, error => {
      alert(JSON.stringify(error));
    });


  }

}


