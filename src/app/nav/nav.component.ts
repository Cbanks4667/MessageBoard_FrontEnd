import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.html']
    
})

export class NavComponent implements OnInit {
    constructor(private auth: AuthService){

    }

    ngOnInit(){
        
    }
}