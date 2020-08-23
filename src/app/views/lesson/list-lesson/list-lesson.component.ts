import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../../services/lesson.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.css']
})
export class ListLessonComponent implements OnInit {
  
  constructor(private lessonService: LessonService, private alertService: AlertService) { }
  totalItems: number = 20;
  currentPage: number = 1;
  itemsPerPage = 5;
  search = '';
  list : [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.lessonService.getAllLessonsPageSize(this.currentPage,this.itemsPerPage,this.search).subscribe(response =>
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

  deleteLesson(id: number) {
    this.lessonService.deleteLesson(id).subscribe(response => {
      if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alertService.success(response.message);
        this.loadData();
      }else {
        this.alertService.danger(response.message);
      }
    })
  }
}
