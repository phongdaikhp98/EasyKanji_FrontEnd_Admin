import { Component, OnInit } from '@angular/core';
import { TestUserService } from '../../../../services/test-user.service';
import { RESPONSE_STATUS } from '../../../../../environments/environment';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {
  totalItems: number = 50;
  currentPage: number   = 1;
  itemsPerPage = 100;
  search = '';
  list : [];
  constructor(private testUserService: TestUserService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.testUserService.getAllUserPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
      {
        if(response.errorcode === RESPONSE_STATUS.SUCCESS) {
          this.list = response.body.content;
          console.log(this.list);
        }else {
          this.alertService.danger(response.message);
        }
      })
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.loadData();
  }

  deleteUser(id: number) {
    this.testUserService.deleteUser(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
        this.loadData();
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
