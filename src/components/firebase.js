import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyAC-WyNilbPCZMPS3s31CLWjyBSHco4UaM",
  authDomain: "react-login-test-95261.firebaseapp.com",
  databaseURL: "https://react-login-test-95261.firebaseio.com",
  projectId: "react-login-test-95261",
  storageBucket: "react-login-test-95261.appspot.com",
  messagingSenderId: "1083118467877",
  appId: "1:1083118467877:web:035709ed15903b9c16b8cc",
  measurementId: "G-PVPQ5WLSVT"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
			displayName: name,
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
