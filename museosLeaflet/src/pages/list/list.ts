import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Headers, Http, RequestOptions } from '@angular/http';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });
  url: any = 'http://localhost/Webservice/server/index.php/welcome/getmuseo';
  items: Array<{ nombre: string, direccion: string, icon: string }>;
  menu: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {


    this.http.get(this.url).subscribe(respuesta => {
      this.menu = respuesta.json();
      this.items = [];
      for (var i = 0; i < this.menu.length; i++) {
        this.items.push({
          nombre: this.menu[i].nombre,
          direccion: this.menu[i].direccion,
          icon: 'home'
        });
      }
    }, error => {
      alert(JSON.stringify(error));
    });
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(FormPage, { item: item });
  }
  openForm(){
    alert("hola");
  }
}
