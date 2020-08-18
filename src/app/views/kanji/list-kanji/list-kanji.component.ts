import { Component, OnInit } from '@angular/core';
import { KanjiService } from '../../../services/kanji.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-kanji',
  templateUrl: './list-kanji.component.html',
  styleUrls: ['./list-kanji.component.css']
})
export class ListKanjiComponent implements OnInit {
  totalItems: number = 130;
  currentPage: number = 1;
  itemsPerPage = 10;
  search = '';
  list : [];


  ngOnInit(): void {
    this.loadData();
  }

  constructor(private kanjiService: KanjiService, private alertService: AlertService) { }

  loadData() {
    this.kanjiService.getAllKanjiPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
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

  deleteKanji(id: number) {
    this.kanjiService.deleteKanji(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
      }else {
        this.alertService.danger(response.message);
      }
    })
  }

}
