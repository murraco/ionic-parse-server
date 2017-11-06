import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constant';

export class User {
  public id: string;
  public name: string;
  public email: string;
}

@Injectable()
export class AuthProvider {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;

  constructor() {
    this.parseInitialize();
    console.log('Initiated Auth');
  }

  public signin(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      Parse.User.logIn(username, password, {
        success: function (user) {
          observer.next(true);
          observer.complete();
        },
        error: function (user, error) {
          // If the user inputs the email instead of the username
          var userQuery = new Parse.Query(Parse.User);

          userQuery.equalTo('email', username);
          userQuery.first().then(function (success) {
            var username = success.toJSON().username; 
            Parse.User.logIn(username, password, {
              success: function (user) {
                observer.next(true);
                observer.complete();
              },
              error: function (user, error) {
                observer.error(error);
                observer.complete();
              }
            });
          }, function (error) {
            observer.error(error);
            observer.complete();
          });
          
        }
      });
    });
  }

  public signup(username: string, password: string, email: string): Observable<boolean> {
    return new Observable((observer) => {
      var user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.set('email', email);

      user.signUp(null, {
        success: (user) => {
          observer.next(true);
          observer.complete();
        },
        error: (user, error) => {
          observer.error(error);
          observer.complete();
        }
      });

    });
  }

  public signout(): Observable<boolean> {
    return new Observable((observer) => {
      Parse.User.logOut().then(() => observer.next(true));
    });
  }

  public currentUser(): User {
    let u = Parse.User.current();
    if (u) {
      var user = new User();
      user.id = u.id;
      user.name = u.get('username');
      user.email = u.get('email');
      return user;
    }
    return null
  }

  public authenticated(): boolean {
    return this.currentUser() !== null;
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }

}
