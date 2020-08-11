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
    console.log(this.email + this.password);
    this.authenticationService
      .login(this.email, this.password)
      .subscribe((result: ApiResponse) => {
        if (result.message === RESPONSE_STATUS.FAIL) {
          this.alertService.danger("Sai tài khoản mật khẩu");
          this.authenticationService.logout();
          return;
        }
        if (result.body) {
          console.log(result);
          this.alertService.success("Đăng nhập thành công");
          this.router.navigate(["/"]);
        }
      });
  }
}
