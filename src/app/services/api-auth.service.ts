import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor() { }

  hello() {
    console.log("Hello");
  }
}
