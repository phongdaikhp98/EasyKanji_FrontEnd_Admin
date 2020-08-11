import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { UserModel } from '../../../../models/UserModel';
import { RESPONSE_STATUS } from '../../../../../environments/environment';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  totalItems: number = 50;
  currentPage: number   = 1;
  itemsPerPage = 20;
  search = '';
  list : UserModel[];
  constructor(private userService: UserService,private alert:AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.userService.getAll(this.currentPage,this.itemsPerPage,this.search).subscribe((result) => {
      if(result.message === RESPONSE_STATUS.SUCCESS) {
        this.list = result.body.content;
        this.totalItems = result.body.totalElements;
      }else {
        this.alert.danger('Có lỗi xảy ra');
      }
    })
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.loadData();
  }

  disableUser(id: number): void {
    this.userService.changeDisableUser(id).subscribe((result) => {
      if(result.message === RESPONSE_STATUS.SUCCESS) {
        this.alert.success('Sửa thành công');
        this.loadData();
      }else {
        this.alert.danger('Cõ lỗi xảy ra');
      }
    })
  }

}
