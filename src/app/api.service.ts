import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) {

   }

   getUsername(username:string){

   }

  getRepo( username: string  ):any{
    return this.http.get(`https://api.github.com/users/${username}/repos`)
  }
}
