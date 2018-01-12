import { Component, EventEmitter, Output } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {
  }

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<object>) => console.log(response.type === HttpEventType.Sent),
        (error: Error) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService.retrieveRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
