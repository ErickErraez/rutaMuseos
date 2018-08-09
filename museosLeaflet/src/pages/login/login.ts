import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register'
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



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {
  }
  login() {
    this.getAll();

  }
  registro() {
    this.navCtrl.setRoot(RegisterPage);
  }
  forgotPass() {
    alert("proximamente");
  }

  getAll(){
    this.http.get(this.url).subscribe(respuesta => {
      alert(JSON.stringify(respuesta.json()));
    }, error => {
      alert(JSON.stringify(error));
    });
  }
}
