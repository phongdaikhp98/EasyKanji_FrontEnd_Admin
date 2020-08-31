import { AlertService } from 'ngx-alerts';
import { KanjiCreateModel } from './../../../models/kanji-create-model';
import { Component, OnInit } from '@angular/core';
import { KanjiService } from '../../../services/kanji.service';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-add-kanji',
  templateUrl: './add-kanji.component.html',
  styleUrls: ['./add-kanji.component.css']
})
export class AddKanjiComponent implements OnInit {

  kanjiModel: KanjiCreateModel;
  constructor(private kanjiService: KanjiService, private alert: AlertService) { }

  ngOnInit(): void {
    this.kanjiModel = new KanjiCreateModel();
  }

  createKanji() {
    if(!this.kanjiModel.image  || !this.kanjiModel.kanji  || !this.kanjiModel.kanji_meaning 
       || !this.kanjiModel.sino_vietnamese  || !this.kanjiModel.lesson_id ) {
      this.alert.danger('Field cannot empty');
      return;
    }

    this.kanjiService.createKanji(this.kanjiModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.kanjiModel = new KanjiCreateModel();
        this.alert.success(result.message);
      }else {
        this.alert.danger(result.message);
      }
    })
  }
}
