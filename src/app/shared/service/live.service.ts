import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:3004/lives';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLives(): Observable<Live[]> {
    return this.httpClient.get<Live[]>(this.apiUrl);
  }
}
