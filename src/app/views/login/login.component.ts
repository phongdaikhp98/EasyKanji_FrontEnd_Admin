import { Component } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { AlertService } from "ngx-alerts";
import { Router } from "@angular/router";
import { ApiResponse } from "../../models/ApiResponse";
import { RESPONSE_STATUS } from "../../../environments/environment";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {}

  loginFuntion() {
    if(!this.email  || !this.password ) {
     this.alertService.danger('Field cannot empty');
     return;
    }

    if(this.password.length < 6 ) {
      this.alertService.danger('Password require at least 6 characters ');
      return;
    }

    console.log(this.email + this.password);
    this.authenticationService
      .login(this.email, this.password)
      .subscribe((result: ApiResponse) => {
        if (result.errorcode === RESPONSE_STATUS.FAIL) {
          this.alertService.danger("Wrong username or password");
          this.authenticationService.logout();
          return;
        }
        if (result.body) {
          console.log(result);
          this.alertService.success("Sign in successfully!");
          this.router.navigate(["/"]);
        }
      });
  }
}
