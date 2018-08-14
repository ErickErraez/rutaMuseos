import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register'
import * as $ from 'jquery';
import { Headers, Http, RequestOptions } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  headers: any = new Headers({ 'Content-Type': 'application/json' })
  options: any = new RequestOptions({ headers: this.headers })
  url: any = 'http://localhost/Webservice/server/index.php/welcome/getuser'
  x: any;

  constructor(public navController: NavController, public navParams: NavParams, private http: Http) {
  }


  login() {

    var user = $("#email").val();
    var pass = $('#password').val();

    var data = { email: user, contrasena: pass };

    this.http.post(this.url, JSON.stringify(data), this.headers)
      .subscribe(Response => {
        let respuesta = Response.json();
        if (respuesta > 0) {
          alert("Bienvenido");
          this.navController.setRoot(HomePage);
        } else {
          alert('Usuario o contrasea Incorrectos');
          this.navController.setRoot(LoginPage);
        }
      });
  }
  registro() {
    this.navController.setRoot(RegisterPage);
  }
  forgotPass() {
    alert("proximamente");
  }

  getAll() {
    this.http.get(this.url).subscribe(respuesta => {
      alert(JSON.stringify(respuesta.json()));
      console.log(respuesta);
    }, error => {
      alert(JSON.stringify(error));
    });
  }
}