import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_URL = "http://localhost:3000";
@Injectable({
    providedIn: 'root'
})
export class SingUpService{
    constructor(private http: HttpClient){}

    checkoutUserNametaken(userName: string){
       return this.http.get(API_URL+'/user/exists/' + userName);
    }
}