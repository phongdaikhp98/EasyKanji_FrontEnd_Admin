import { QuizMultipleService } from './../../../services/quiz-multiple.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-quiz-multiple',
  templateUrl: './list-quiz-multiple.component.html',
  styleUrls: ['./list-quiz-multiple.component.css']
})
export class ListQuizMultipleComponent implements OnInit {

  totalItems: number = 400;
  currentPage: number = 1;
  itemsPerPage = 10;
  search = '';
  list : [];

  constructor(private quizMultipleService: QuizMultipleService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.quizMultipleService.getAllQuizMultiplePageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
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

  deleteQuizMultiple(id: number) {
    this.quizMultipleService.deleteQuizMultiple(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
        this.loadData();
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
