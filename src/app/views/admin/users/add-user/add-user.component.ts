import { Component, OnInit } from '@angular/core';
import { UserCreateModel } from '../../../../models/UserCreateModel';
import { UserService } from '../../../../services/user.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../../environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userModel: UserCreateModel;
  constructor(private userService: UserService, private alert: AlertService) { }

  ngOnInit(): void {
    this.userModel = new UserCreateModel();
  }

  createUser() {
    if(this.userModel.username.length <4 || this.userModel.password.length< 4) {
      this.alert.danger('Tên tài khoản lớn hơn 4 kí tự');
      return;
    }
    this.userService.createUser(this.userModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alert.success('Thêm mới thành công');
        this.userModel = new UserCreateModel();
      }else {
        this.alert.success('Có lỗi xảy ra');
      }
    })
  }

}
