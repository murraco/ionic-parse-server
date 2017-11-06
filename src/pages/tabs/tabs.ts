import { Component } from '@angular/core';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private auth: AuthProvider) { }

  ionViewCanEnter(): boolean {
    return this.auth.authenticated();
  }

}
