import { AlertService } from 'ngx-alerts';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  totalItems: number = 130;
  currentPage: number = 1;
  itemsPerPage = 10;
  search = '';
  list : [];

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getAllUserPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
      {
        if(response.errorcode === RESPONSE_STATUS.SUCCESS) {
          this.list = response.body.content;
          this.totalItems = response.body.totalElements;
          console.log(this.list);
        }else {
          this.alertService.danger(response.message);
        }
      })
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.currentPage = event.page;
    this.loadData();
  }
}
