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
import { LottieModule } from 'ngx-lottie';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NavbarComponent,
    DayCountPipe,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
