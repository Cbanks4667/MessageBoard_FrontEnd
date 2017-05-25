import { Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import  {WebcopyService } from '../services/webcopy.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent implements OnInit{
   
message = {
    owner: this.auth.name,
    text: ""

}
    constructor(private WebService : WebcopyService, private auth : AuthService) {

    }

    
    ngOnInit() {

    }
    
    post() {
        this.WebService.postMessage(this.message);
        
    }
}