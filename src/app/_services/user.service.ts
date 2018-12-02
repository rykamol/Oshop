import { AppUser } from './../models/app-user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    return this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  gertUser(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }
}
