import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureLoaded = 'recipe';

  onFeatureSelected(feature: string) {
    this.featureLoaded = feature;
  }
}
