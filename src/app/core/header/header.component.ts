import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { User } from '../user/user';


@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    
    user$: Observable<User>
    user: User;
    constructor(
        readonly userService: UserService,
        readonly router: Router
        ){
        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate([''])
    }
}