
import { Component, OnInit } from '@angular/core';
import { QuizMultipleModel } from '../../../models/quiz-multiple-model';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private quizMultipleService: QuizMultipleService, private route: ActivatedRoute
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
    this.quizMultipleService.updateQuizMultiple(this.id ,this.quizMultipleModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.quizMultipleModel = new QuizMultipleModel();
        this.alert.success(apiResponse.message);
      }
    });
   }

}
