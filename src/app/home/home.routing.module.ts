import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGard } from "../core/auth/auth.guards";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./singup/signup.component";

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGard],
        children:[
            {
                path: '', 
                component: SignInComponent
            },
            {
                path: 'signup', 
                component: SignUpComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}