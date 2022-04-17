import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ApiService]
})
export class UsersComponent implements OnInit {
  users:any
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getPublicUsersWithPromise()
  }


  getPublicUsersWithPromise(){
    const users = this.apiService.getUsers('ianmwema07').then((users:any)=>{
      this.users = users
      console.log(users);
    })
  }
}
