import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import  {WebcopyService } from '../services/webcopy.service';


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

model = {
    firstName: "",
    lastName: ""

}
    constructor (private WebService : WebcopyService){}

    ngOnInit(){
        this.WebService.getUser().subscribe(res =>{
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        })
    }

    post() {
        this.WebService.saveUser(this.model).subscribe();
    }

}