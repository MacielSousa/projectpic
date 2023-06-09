import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { lowerCaseValidator } from "src/app/shared/validator/lower-case.validator";
import { NewUser } from "./new-user";
import { SingUpService } from "./singup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";


@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private singUpService: SingUpService,
        private router: Router,
        readonly platformDetectorService: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkuserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
        this.platformDetectorService.isPlatformBrowser() && this.inputEmail.nativeElement.focus();
    }

    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.singUpService
        .signup(newUser)
        .subscribe(() => this.router.navigate(['']), err => console.log(err));
    }
}