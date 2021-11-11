import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  httpOptions = {
    header: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLIvesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }
}
