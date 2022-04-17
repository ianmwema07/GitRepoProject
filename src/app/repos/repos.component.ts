import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repo = new FormControl("",Validators.required)
  repos:any = []


  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getPublicReposWithPromise(repos: any){
     this.apiService.getUsers(repos).then((repos:any)=>{
      this.repos = repos
      console.log(repos);
    })
  }

  searchRepo(){
    if(!this.repo.valid){
      alert("Repository name is required");
    }
    let repos = this.repo.value;
    this.getPublicReposWithPromise(repos);
    return false;
  }


}
