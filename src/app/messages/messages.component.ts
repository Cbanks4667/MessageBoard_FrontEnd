import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import  {WebcopyService } from '../services/webcopy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  //messages=[];
 
  constructor(private WebService: WebcopyService, private route: ActivatedRoute ) { }

   ngOnInit() {
    var name = this.route.snapshot.params.name;
    this.WebService.getMessages(name);
    this.WebService.getUser().subscribe();

    //  this.WebService.messages.subscribe(messages => {
    //    this.messages = messages;
    //   })
  }

}
