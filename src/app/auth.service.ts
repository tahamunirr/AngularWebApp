import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  AuthProvider,
  signOut,
} from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = true;
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    const auth = getAuth();
    console.log(auth.currentUser);
    if (auth.currentUser) {
      return true;
    }
    return false;
  }

  // GoogleAuth() {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  getName() {
    const auth = getAuth();
    return auth.currentUser?.displayName;
  }

  GoogleAuth() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    this.isAuthenticated = true;
    return this.AuthLogin(auth, provider);
  }

  // Auth logic to run auth providers
  AuthLogin(auth: Auth, provider: AuthProvider) {
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log("You have been successfully logged in!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  SignOut() {
    const auth = getAuth();
    this.isAuthenticated = false;
    return signOut(auth).then(() => {
      this.router.navigate(["/"]);
    });
  }
}
