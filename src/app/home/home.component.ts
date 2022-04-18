import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user:any;
    constructor(private http : HttpClient){

  }

    ngOnInit(): void {
      this.http.get(`https://api.github.com/users/ianmwema07`)
      .subscribe(Response => {
        console.log(Response)
        this.user=Response;
      });
     }
    }
