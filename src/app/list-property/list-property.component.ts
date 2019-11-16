import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  address: string;
  desc: string;
  eircode: any;
  rentAmount: number;
  image: File;
  successMessage: string;
  errorMessage: string;
  filename: string;


  constructor(private DB: AngularFirestore, private auth: AngularFireAuth, private storage: AngularFireStorage) {
  }


  public addProperty() {
    if ( this.image == null && this.auth.auth.currentUser == null) {
      this.errorMessage = 'some fields are empty';
      console.log('empty');
      return;
    }
    console.log(this.rentAmount);
    console.log(this.image.name);
    console.log('asdf222');
    // TODO potentialy security risk
    const ref = this.storage.storage.ref('PropertyLetImages/' + this.image.name);
    const task = ref.put(this.image);
    task.on('state_changed', (a) => {
      console.log(a);
    }, error => {
      console.log(error);
    }, () => {
      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.getProperties(downloadURL);
      });
    });
    console.log('sdafvxcXZ');
  }

  private getProperties(url: string) {
    this.DB.collection('Property')
      .doc(this.eircode)
      .set({
        address: this.address,
        desc: this.desc,
        rentAmount: this.rentAmount,
        imageURL: url,
      }).then(res => {
      this.errorMessage = '';
      this.successMessage = 'create property listing';

      console.log(res);
    }).catch((err) => {
      console.log('error');
      console.log(err);
    });
  }

  ngOnInit() {

  }

  onFileChange($event: Event) {
    console.log($event);
    const Input = (event.target as HTMLInputElement);
    this.image = Input.files[0];
    this.filename = this.image.name;
  }
}
