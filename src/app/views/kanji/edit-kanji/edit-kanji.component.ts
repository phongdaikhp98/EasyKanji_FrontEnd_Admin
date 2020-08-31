import { Component, OnInit } from '@angular/core';
import { KanjiModel } from '../../../models/kanji-model';
import { KanjiService } from '../../../services/kanji.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-edit-kanji',
  templateUrl: './edit-kanji.component.html',
  styleUrls: ['./edit-kanji.component.css']
})
export class EditKanjiComponent implements OnInit {
  id: number;
  kanjiModel: KanjiModel;

  constructor(private kanjiService : KanjiService, private route: ActivatedRoute, private router2: Router
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.kanjiModel = new KanjiModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.kanjiService.getInfoKanji(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger("Cannot get kanji detail!");
      }else {
        this.kanjiModel = apiResponse.body;
      }
    });
   }

   updateKanji(){
    if(!this.kanjiModel.image  || !this.kanjiModel.kanji  || !this.kanjiModel.kanji_meaning 
      || !this.kanjiModel.sino_vietnamese  || !this.kanjiModel.lesson_id ) {
     this.alert.danger('Field cannot empty');
     return;
   }
   
    this.kanjiService.updateKanji(this.id ,this.kanjiModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.kanjiModel = new KanjiModel();
        this.alert.success(apiResponse.message);
        this.router2.navigate(["/list-kanji"]);
      }
    });
   }

}
