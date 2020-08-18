import { QuizWritingService } from './../../../services/quiz-writing.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-quiz-writing',
  templateUrl: './list-quiz-writing.component.html',
  styleUrls: ['./list-quiz-writing.component.css']
})
export class ListQuizWritingComponent implements OnInit {
  totalItems: number = 780;
  currentPage: number = 1;
  itemsPerPage = 10;
  search = '';
  list : [];

  constructor(private quizWritingService: QuizWritingService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.quizWritingService.getAllQuizWritingPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
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
    this.quizWritingService.deleteQuizWriting(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
