import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featureLoaded = 'recipe';

  onFeatureSelected(feature: string) {
    this.featureLoaded = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2NR9aEITJRYE-vQ2ENGdSF6gKrD8FOr0',
      authDomain: 'ng-recipe-book-store.firebaseapp.com',
    });
  }
}
