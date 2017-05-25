import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {WebcopyService } from './services/webcopy.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NavComponent} from './nav/nav.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
import {AuthService} from './services/auth.service';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

var routes = [{
  path: '',
  component: HomeComponent
},
// {
//    path: 'messages',
//   component: MessagesComponent
// },
{
   path: 'register',
  component: RegisterComponent
},
{
   path: 'login',
  component: LoginComponent
},
{
   path: 'user',
  component: UserComponent
},
{
   path: 'messages/:name',
  component: MessagesComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebcopyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
