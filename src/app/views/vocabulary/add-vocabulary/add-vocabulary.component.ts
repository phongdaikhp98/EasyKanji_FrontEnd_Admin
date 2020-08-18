import { Component, OnInit } from '@angular/core';
import { VocabularyModel } from '../../../models/vocabulary-model';
import { VocabularyService } from '../../../services/vocabulary.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { KanjiCreateModel } from '../../../models/kanji-create-model';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.component.html',
  styleUrls: ['./add-vocabulary.component.css']
})
export class AddVocabularyComponent implements OnInit {

  vocabularyModel: VocabularyModel;
  constructor(private vocabularyService: VocabularyService, private alert: AlertService) { }

  ngOnInit(): void {
    this.vocabularyModel = new VocabularyModel();
  }

  createVocabulary() {
    this.vocabularyService.createVocabulary(this.vocabularyModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.vocabularyModel = new VocabularyModel();
        this.alert.success(result.message);
      }else {
        this.alert.danger(result.message);
      }
    })
  }
}
