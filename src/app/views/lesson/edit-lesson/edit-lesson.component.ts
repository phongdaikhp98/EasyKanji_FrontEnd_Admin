import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson-model';
import { LessonService } from '../../../services/lesson.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  id: number;
  lessonModel: LessonModel;

  constructor(private lessonService : LessonService, private route: ActivatedRoute
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.lessonModel = new LessonModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.lessonService.getInfoLesson(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger("Cannot get lesson detail!");
      }else {
        this.lessonModel = apiResponse.body;
      }
    });
   }

   updateLesson(){
    this.lessonService.updateLesson(this.id ,this.lessonModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.lessonModel = new LessonModel();
        this.alert.success(apiResponse.message);
      }
    });
   }
}
