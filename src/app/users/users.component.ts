import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,} from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ApiService]
})
export class UsersComponent implements OnInit {

  options: AnimationOptions = {
    path: 'add animation json file link', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };

  name = new FormControl('' , Validators.required)
  users:any
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

  }


  getPublicUsersWithPromise(username: any){
    this.apiService.getUsers(username).then((users:any)=>{
      this.users = users
      console.log(users);
    })
  }

  searchUser(){
    if(!this.name.valid){
      alert("Username is required");
    }
    let username = this.name.value;
    this.getPublicUsersWithPromise(username);
    return false;
  }
}
