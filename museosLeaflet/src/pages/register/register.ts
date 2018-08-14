import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import * as $ from 'jquery';
import { Headers, Http, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });
  url: any = 'http://localhost/Webservice/server/index.php/Welcome/guardar';

  constructor(public navController: NavController, private http: Http) {
  }

  // register and go to home page
  register() {

    var name = $("#nombre").val();
    var lastN = $("#apellido").val();
    var user = $("#email").val();
    var pass = $('#password').val();
    var confPass = $('#configPassword').val();

    if (pass===confPass) {
      var datos = { nombre: name, apellido: lastN, email: user, contrasena: pass };

      this.http.post(this.url, JSON.stringify(datos), this.headers)
        .subscribe(Response => {
          let respuesta = Response.json();
          alert(respuesta);
          //this.navController.setRoot(HomePage);
        });
    }else{
      alert("Error las contraseñas no coinciden");
    }
  }

  // go to login page
  login() {
    this.navController.setRoot(LoginPage);
  }
}
