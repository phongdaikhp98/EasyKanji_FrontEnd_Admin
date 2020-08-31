import { Component, OnInit } from '@angular/core';

import { LessonService } from '../../../services/lesson.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { LessonCreateModel } from '../../../models/lesson-create-model';


@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  
  lessonModel: LessonCreateModel;
  constructor(private lessonService: LessonService, private alert: AlertService) { }

  ngOnInit(): void {
    this.lessonModel = new LessonCreateModel();
  }

  createLesson() {
    if(!this.lessonModel.name || !this.lessonModel.level_id)  {
      this.alert.danger('Field cannot empty');
      return;
    }
    this.lessonService.createLesson(this.lessonModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alert.success(result.message);
        this.lessonModel;
      }else {
        this.alert.danger(result.message);
      }
    })
  }

}
