import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../../services/vocabulary.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-vocabulary',
  templateUrl: './list-vocabulary.component.html',
  styleUrls: ['./list-vocabulary.component.css']
})
export class ListVocabularyComponent implements OnInit {
  totalItems: number = 400;
  currentPage: number = 1;
  itemsPerPage = 10;
  search = '';
  list : [];

  constructor(private vocabularyService: VocabularyService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.vocabularyService.getAllVocabularyPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
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
    this.vocabularyService.deleteVocabulary(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
