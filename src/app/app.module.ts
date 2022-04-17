import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DayCountPipe } from './day-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NavbarComponent,
    DayCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
