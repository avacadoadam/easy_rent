import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {propertyLet} from '../DataObjects/propertyLet';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rent-listings',
  templateUrl: './rent-listings.component.html',
  styleUrls: ['./rent-listings.component.scss']
})
export class RentListingsComponent implements OnInit {

  property: Observable<propertyLet[]>;
  public properties: AngularFirestoreCollection<propertyLet>;
  length: number;
  private limit = 50;
  amountOfItems: number;

  constructor(private DB: AngularFirestore, private auth: AngularFireAuth) {
    this.properties = this.DB.collection('Property', ref => ref.limit(this.limit));
    this.property = this.properties.valueChanges();
    this.property.subscribe(result => {
      this.amountOfItems = result.length;
    });
  }

  ngOnInit() {
  }

}
