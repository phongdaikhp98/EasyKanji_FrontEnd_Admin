import { KanjiService } from './../../../../../services/kanji.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../../../environments/environment';

@Component({
  selector: 'app-edit-kanji',
  templateUrl: './edit-kanji.component.html',
  styleUrls: ['./edit-kanji.component.css']
})
export class EditKanjiComponent implements OnInit {
  totalItems: number = 50;
  currentPage: number   = 1;
  itemsPerPage = 100;
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

  deleteUser(id: number) {
    this.kanjiService.deleteKanji(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
        this.loadData();
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
