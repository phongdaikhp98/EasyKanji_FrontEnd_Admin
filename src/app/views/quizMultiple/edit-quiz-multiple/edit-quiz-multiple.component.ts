
import { Component, OnInit } from '@angular/core';
import { QuizMultipleModel } from '../../../models/quiz-multiple-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { QuizMultipleService } from '../../../services/quiz-multiple.service';

@Component({
  selector: 'app-edit-quiz-multiple',
  templateUrl: './edit-quiz-multiple.component.html',
  styleUrls: ['./edit-quiz-multiple.component.css']
})
export class EditQuizMultipleComponent implements OnInit {
  id: number;
  quizMultipleModel: QuizMultipleModel;

  constructor(private quizMultipleService: QuizMultipleService, private route: ActivatedRoute, private router2: Router
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.quizMultipleModel = new QuizMultipleModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.quizMultipleService.getInfoQuizMultiple(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger("Cannot get kanji detail!");
      }else {
        this.quizMultipleModel = apiResponse.body;
      }
    });
   }

   updateQuizMultiple(){
    if(!this.quizMultipleModel.answerA  || !this.quizMultipleModel.answerB  || !this.quizMultipleModel.answerC 
      || !this.quizMultipleModel.answerD  || !this.quizMultipleModel.correctAnswer  || !this.quizMultipleModel.question 
      || !this.quizMultipleModel.level_id  || !this.quizMultipleModel.lesson_id ) {
      this.alert.danger('Field cannot empty');
      return;
    }
    
    this.quizMultipleService.updateQuizMultiple(this.id ,this.quizMultipleModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.quizMultipleModel = new QuizMultipleModel();
        this.alert.success(apiResponse.message);
        this.router2.navigate(["/list-quiz-multiple"]);
      }
    });
   }

}
