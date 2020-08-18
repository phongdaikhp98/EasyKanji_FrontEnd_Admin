import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user-model';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { KanjiModel } from '../../../models/kanji-model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  userModel: UserModel;

  constructor(private userService: UserService, private route: ActivatedRoute
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
        this.alert.danger("Cannot get user detail!");
      }else {
        this.userModel = apiResponse.body;
      }
    });
   }

   updateUser(){
    this.userService.updateUser(this.id ,this.userModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.userModel = new UserModel();
        this.alert.success(apiResponse.message);
      }
    });
   }
}
