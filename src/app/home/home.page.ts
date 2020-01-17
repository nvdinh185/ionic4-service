import { Component } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service';
import { ApiStorageService } from '../services/api-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private apiAuth: ApiAuthService,
    private apiStorage: ApiStorageService
  ) { }

  ngOnInit() {
    // this.apiAuth.hello()
    let data = this.apiStorage.doSomethingAwesome()
    console.log(data);
  }

}
