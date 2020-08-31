import { QuizMultipleModel } from './../../../models/quiz-multiple-model';
import { Component, OnInit } from '@angular/core';
import { QuizMultipleService } from '../../../services/quiz-multiple.service';
import { AlertService } from 'ngx-alerts';
import { KanjiCreateModel } from '../../../models/kanji-create-model';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-add-quiz-multiple',
  templateUrl: './add-quiz-multiple.component.html',
  styleUrls: ['./add-quiz-multiple.component.css']
})
export class AddQuizMultipleComponent implements OnInit {

  quizMultipleModel: QuizMultipleModel;
  constructor(private quizMultipleService: QuizMultipleService, private alert: AlertService) { }

  ngOnInit(): void {
    this.quizMultipleModel = new QuizMultipleModel();
  }

  createQuizMultiple() {
    if(!this.quizMultipleModel.answerA  || !this.quizMultipleModel.answerB  || !this.quizMultipleModel.answerC 
      || !this.quizMultipleModel.answerD  || !this.quizMultipleModel.correctAnswer  || !this.quizMultipleModel.question 
      || !this.quizMultipleModel.level_id || !this.quizMultipleModel.lesson_id ) {
      this.alert.danger('Field cannot empty');
      return;
    }

    this.quizMultipleService.createQuizMultiple(this.quizMultipleModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.quizMultipleModel = new QuizMultipleModel();
        this.alert.success(result.message);
      }else {
        this.alert.danger(result.message);
      }
    })
  }
}
