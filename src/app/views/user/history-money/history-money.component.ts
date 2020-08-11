import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../../../models/HistoryModel';
import { HistoryService } from '../../../services/history.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-history-money',
  templateUrl: './history-money.component.html',
  styleUrls: ['./history-money.component.css']
})
export class HistoryMoneyUserComponent implements OnInit {
  totalItems: number = 50;
  currentPage: number   = 1;
  itemsPerPage = 20;
  search = '';
  list : HistoryModel[];
  constructor(private historyService: HistoryService, private alert: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.historyService.getAllByUser(this.currentPage,this.itemsPerPage).subscribe(result => {
      if(result.message === RESPONSE_STATUS.SUCCESS) {
        this.list = result.body.content;
        this.totalItems = result.body.totalElements;
      }else {
        this.alert.danger('Đã có lỗi xảy ra');
      }
    })
  }
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.loadData();
  }

}
