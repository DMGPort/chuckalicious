import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseAuthGoogleConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

export const FirebaseConfig = {
      apiKey: "AIzaSyBEwBHVM5Y1K8dATNNOOfUc94wZRSKfJAw",
      authDomain: "chuck-games.firebaseapp.com",
      databaseURL: "https://chuck-games.firebaseio.com/",
      storageBucket: ""
};