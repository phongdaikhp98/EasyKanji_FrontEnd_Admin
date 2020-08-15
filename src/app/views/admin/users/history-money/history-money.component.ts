import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../../../../models/HistoryModel';
import { HistoryService } from '../../../../services/history.service';
import { RESPONSE_STATUS } from '../../../../../environments/environment';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-history-money',
  templateUrl: './history-money.component.html',
  styleUrls: ['./history-money.component.css']
})
export class HistoryMoneyComponent implements OnInit {
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
    this.historyService.getAll(this.currentPage,this.itemsPerPage,this.search).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
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
