import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';


@Injectable({ providedIn: 'root'})
export class AuthGard implements CanActivate{

    constructor(
        readonly userService: UserService,
        readonly router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        if(this.userService.isLogged()){
            this.router.navigate(['user', this.userService.getUserName()]);
            return false;
        }
        return true;
    }
}