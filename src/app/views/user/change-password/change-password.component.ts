import { Component, OnInit } from '@angular/core';
import { ChangePasswordModel } from '../../../models/ChangePasswordModel';
import { UserService } from '../../../services/user.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: ChangePasswordModel;

  constructor(private userService: UserService, private alert: AlertService) { }

  ngOnInit(): void {
    this.changePassword = new ChangePasswordModel();
  }
  changePasswordF() {
    this.userService.changePasswordUser(this.changePassword).subscribe(result =>{
      if(result.message === RESPONSE_STATUS.SUCCESS) {
        this.alert.success('Đổi mật khẩu thành công');
        this.changePassword = new ChangePasswordModel();
      }else {
        this.alert.danger('Đã có lỗi xảy ra');
      }
    })
  }

}
