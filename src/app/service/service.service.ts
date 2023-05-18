import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  qr(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/mfa/qr").pipe(map(Response => Response))
        .subscribe((response: any) => {
          resolve(response);
        }, reject)
    })
  }

  veriTOTP(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/mfa/verify", body).pipe(map(Response => Response))
        .subscribe((response: any) => {
          resolve(response);
        }, reject)
    })
  }

}
