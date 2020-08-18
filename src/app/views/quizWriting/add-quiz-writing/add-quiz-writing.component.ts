import { QuizWritingCreateModel } from './../../../models/quiz-writing-create-model';
import { Component, OnInit } from '@angular/core';
import { KanjiService } from '../../../services/kanji.service';
import { AlertService } from 'ngx-alerts';
import { QuizWritingService } from '../../../services/quiz-writing.service';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-add-quiz-writing',
  templateUrl: './add-quiz-writing.component.html',
  styleUrls: ['./add-quiz-writing.component.css']
})
export class AddQuizWritingComponent implements OnInit {

  quizWritingModel: QuizWritingCreateModel;
  constructor(private quizWritingService: QuizWritingService, private alert: AlertService) { }

  ngOnInit(): void {
    this.quizWritingModel = new QuizWritingCreateModel();
  }

  createQuizWriting() {

    this.quizWritingService.createQuizWriting(this.quizWritingModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.quizWritingModel = new QuizWritingCreateModel();
        this.alert.success(result.message);
      }else {
        this.alert.danger(result.message);
      }
    })
  }

}
