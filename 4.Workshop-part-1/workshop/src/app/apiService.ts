import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor (private http: HttpClient) {

  }

  getPosts() {
    const {apiUrl} = environment
    return this.http.get(`${apiUrl}/posts.json`);
  }
}
