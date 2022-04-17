import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any = []


  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getPublicUsersWithPromise(repos: any){
     this.apiService.getUsers(repos).then((repos:any)=>{
      this.repos = repos
      console.log(repos);
    })
  }


}
