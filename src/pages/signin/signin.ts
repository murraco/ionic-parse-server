import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController, private authPvdr: AuthProvider) { }

  ionViewDidLoad() {
    console.log('Initiated Signin');
  }

  public doSignin() {
    let loader = this.loadCtrl.create({
      content: 'Signing in...'
    });
    loader.present();

    this.authPvdr.signin(this.username, this.password).subscribe((success) => {
      this.navCtrl.setRoot(TabsPage);
      loader.dismissAll();
    }, (error) => {
      alert('Invalid username or password');
      loader.dismissAll();
    });
  }

}
