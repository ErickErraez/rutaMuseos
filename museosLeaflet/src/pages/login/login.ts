import { IonicPage, NavParams } from 'ionic-angular';
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    login(){
      this.navCtrl.setRoot(HomePage);
    }
    registro(){
      this.navCtrl.setRoot(RegisterPage);
    }
}
