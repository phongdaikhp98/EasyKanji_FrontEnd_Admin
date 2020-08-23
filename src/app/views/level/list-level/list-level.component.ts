
import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent implements OnInit {

  constructor(private levelService: LevelService, private alertService: AlertService) { }
  // totalItems: number = 20;
  // currentPage: number = 1;
  // itemsPerPage = 5;
  // search = '';
  list : [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.levelService.getAllLevelsPageSize().subscribe(response =>
      {
        if(response.errorcode === RESPONSE_STATUS.SUCCESS) {
          this.list = response.body;
          // this.totalItems = response.body.totalElements;
          console.log(this.list);
        }else {
          this.alertService.danger(response.message);
        }
      })
  }

  // pageChanged(event: any): void {
  //   console.log('Page changed to: ' + event.page);
  //   console.log('Number items per page: ' + event.itemsPerPage);
  //   // this.currentPage = event.page;
  //   this.loadData();
  // }

  deleteLevel(id: number) {
    this.levelService.deleteLevel(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
        this.loadData();
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}

