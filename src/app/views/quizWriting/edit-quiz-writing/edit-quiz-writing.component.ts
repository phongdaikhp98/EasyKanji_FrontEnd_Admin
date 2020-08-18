import { QuizWritingService } from './../../../services/quiz-writing.service';
import { Component, OnInit } from '@angular/core';
import { QuizWritingModel } from '../../../models/quiz-writing-model';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { KanjiModel } from '../../../models/kanji-model';

@Component({
  selector: 'app-edit-quiz-writing',
  templateUrl: './edit-quiz-writing.component.html',
  styleUrls: ['./edit-quiz-writing.component.css']
})
export class EditQuizWritingComponent implements OnInit {

  id: number;
  quizWritingModel: QuizWritingModel;

  constructor(private quizWritingService : QuizWritingService, private route: ActivatedRoute
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.quizWritingModel = new QuizWritingModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.quizWritingService.getInfoQuizWriting(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger("Cannot get kanji detail!");
      }else {
        this.quizWritingModel = apiResponse.body;
      }
    });
   }

   updateQuizWriting(){
    this.quizWritingService.updateQuizWriting(this.id ,this.quizWritingModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.quizWritingModel = new QuizWritingModel();
        this.alert.success(apiResponse.message);
      }
    });
   }
}
