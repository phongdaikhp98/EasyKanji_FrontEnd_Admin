import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { UserModel } from '../../../../models/UserModel';
import { RESPONSE_STATUS } from '../../../../../environments/environment';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: number;
  userModel: UserModel;
  password = '';
  money = 0;
  @ViewChild('myModal') public myModal: ModalDirective;
  constructor(private userService : UserService, private route: ActivatedRoute
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.userModel = new UserModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.userService.getInfoUser(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {

      }else {
        this.userModel = apiResponse.body;
      }
    });
   }

   changePassword() {
     if(this.password.length < 5) {
       this.alert.danger('Độ dài mật khẩu tối thiểu 5 kí tự');
       return;
     }
     this.userService.changePassword(this.id,this.password).subscribe(apiResponse => {
       if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
         this.alert.danger('Có lỗi xảy ra');
       }else {
         this.alert.success('Đổi thành công');
       }
       this.myModal.hide();
     })
   }

   addMoney() {
     this.userService.addMoney(this.id, this.money).subscribe(result => {
       if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
         this.alert.success('Cập nhập thành công');
         this.money = 0;
         this.getData();
       }else {
         this.alert.danger('Đã có lỗi xảy ra');
         this.getData();
       }
     })
   }

   subMoney() {
    this.userService.subMoney(this.id, this.money).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alert.success('Cập nhập thành công');
        this.money = 0;
        this.getData();
      }else {
        this.alert.danger('Đã có lỗi xảy ra');
        this.getData();
      }
    })
  }
}
