import {Component, OnInit } from '@angular/core';
import { navItemsAdmin,navItemsUser } from '../../_nav';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItemsUser;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role === "ROLE_ADMIN") {
      this.navItems = navItemsAdmin;
    }else{
      this.router.navigate(["/login"]);
      this.alertService.danger("Your account don't have permission to access this resource");
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
