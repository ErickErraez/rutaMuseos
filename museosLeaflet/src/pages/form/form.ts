import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
