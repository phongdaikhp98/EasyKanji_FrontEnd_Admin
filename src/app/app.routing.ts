import { InforComponent } from './views/user/infor/infor.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { ListUserComponent } from './views/admin/users/list-user/list-user.component';
import { EditUserComponent } from './views/admin/users/edit-user/edit-user.component';
import { AddUserComponent } from './views/admin/users/add-user/add-user.component';
import { HistoryMoneyComponent } from './views/admin/users/history-money/history-money.component';
import { ChangePasswordComponent } from './views/user/change-password/change-password.component';
import { HistoryMoneyUserComponent } from './views/user/history-money/history-money.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Home",
    },
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "users",
        component: ListUserComponent,
        data : {
          title: "Danh sách tài khoản"
        }
      },
      {
        path: "users/create",
        component: AddUserComponent,
        data : {
          title: "Tạo mới user"
        }
      },
      {
        path: "users/history",
        component: HistoryMoneyComponent,
        data : {
          title: "Lịch sử giao dịch"
        }
      },
      {
        path: "users/:id",
        component: EditUserComponent,
        data : {
          title: "Thông tin chi tiết"
        }
      },
      //user
      {
        path: "change-pwd",
        component: ChangePasswordComponent,
        data : {
          title: "Đổi mật khẩu"
        }
      },
      {
        path: "history-money",
        component: HistoryMoneyUserComponent,
        data : {
          title: "Lịch sử giao dịch"
        }
      },
      {
        path: "infor",
        component: InforComponent,
        data : {
          title: "Thông tin tài khoản"
        }
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
