import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { DynoDialogComponent } from './dyno-dialog/dyno-dialog.component';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import * as firebase from 'firebase';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {

  constructor(
    private dialog: MdDialog,
    private af: AngularFire,
    private router: Router
  ) { }

  public isAuthenticated = false;
  public isAdmin = false;
  public displayName: string = '';
  public photoUrl: string = '';
  private errorDuringLogin = false;

  item: any;
  private storeAuthInfo(authState: FirebaseAuthState): FirebaseAuthState {
    if (authState) {
      this.displayName = authState.auth.displayName;
      this.photoUrl = authState.auth.photoURL;
      this.isAuthenticated = true;
      if (authState.google) {
        localStorage.setItem('idToken', (authState.google as any).idToken);
        localStorage.setItem('accessToken', (authState.google as any).accessToken);
      }
    }
    return authState;
  }
  preLogin(){
      this.login().then((authState) => {
        if (authState && authState.uid) {
          this.uid = authState.uid;
          this.item = this.af.database.object('/users/'+  authState.uid, { preserveSnapshot: true });
          this.item.subscribe(snapshot => {
            if(snapshot.val() != null){
              let count = snapshot.val().losses;
              let mes = (snapshot.val().message);
              this.af.database.object('/users/'+ authState.uid).set({
                    name: this.displayName,
                    message: mes,
                    losses: count
               })
              }
              if(snapshot.val() == null){
              this.af.database.object('/users/'+ authState.uid).set({
                    name: this.displayName,
                    message: "",
                    losses: 0,
                });
              }
           });
          this.dialog.closeAll();
          let message: string = "Login successful for " + authState.auth.displayName;
          localStorage.setItem('dialog_message', message);
          this.dialog.open(DynoDialogComponent);
        } else {
          this.errorDuringLogin = true;
        }
      })
  }
  uid: string;
  login(): firebase.Promise<FirebaseAuthState> {
    const idToken = localStorage.getItem('idToken');
    const accessToken = localStorage.getItem('accessToken');
    if (idToken && accessToken) {
      const authConfig = {
        method: AuthMethods.OAuthToken,
        provider: AuthProviders.Google
      };
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      return this.af.auth.login(credential, authConfig).then((authState) => {
        return this.storeAuthInfo(authState);
      }).catch((err) => {
        localStorage.setItem('idToken', '');
        localStorage.setItem('accessToken', '');
      });
    } else {
      // fall through to popup auth
      return this.af.auth.login({
        method: AuthMethods.Popup
      }).then((authState) => {
        return this.storeAuthInfo(authState);  
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  logout() {
    this.item == null;
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.displayName = this.photoUrl = '';
    this.af.auth.logout();
    localStorage.setItem('idToken', '');
    localStorage.setItem('accessToken', '');
    localStorage.setItem('dialog_message', "Logged Out");
    this.dialog.open(DynoDialogComponent);
    this.router.navigate(['/home']);
  }

  facebook(){
    localStorage.setItem('dialog_message', "Sorry Not Configured Yet");
    this.dialog.open(DynoDialogComponent);
  }


}