import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  
  apiUrl = 'https://localhost:7116/api/Authors';

  constructor(private httpClient: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.apiUrl);
  }
  
}
