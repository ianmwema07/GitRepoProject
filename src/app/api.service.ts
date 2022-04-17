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



  getUsers( username: string  ):any{
    const promise = new Promise((resolve,reject)=>{
      resolve(this.http.get(`https://api.github.com/users/${username}`).toPromise())
    })
    return promise
  }

  getRepos( repository: string  ):any{
    const promise = new Promise((resolve,reject)=>{
      resolve(this.http.get(`https://api.github.com/users/${repository}/repos`).toPromise())
    })
    return promise
  }
}
