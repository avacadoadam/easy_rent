import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCollectionService {

  constructor(private DB: AngularFirestore) {
  }


  public addUser(UserID, User) {
    return this.DB.collection('User').doc(UserID).set(User);
  }

  public checkIfUserExists(UserID) {
    this.DB.collection('User').doc(UserID)
      .get().forEach(next => {
        console.log(next);
        return true;
    });
    console.log('no use in db');
    return false;
  }

}
