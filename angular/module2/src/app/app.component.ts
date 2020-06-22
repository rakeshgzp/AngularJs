import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAQElsveM5xI9nNSsoV0ruagUEQMPS5PSE',
      authDomain: 'https://ng-recipe-book-cddeb.firebaseio.com'
    })
  }
  onNavigate(feature: string){
      this.loadedFeature = feature;
  }
}
