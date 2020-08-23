import { LevelModel } from './../../../models/level-model';
import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.css']
})
export class EditLevelComponent implements OnInit {
  id: number;
  levelModel: LevelModel;

  constructor(private levelService: LevelService, private route: ActivatedRoute
    , private alert:AlertService) { }

  ngOnInit(): void {
    this.levelModel = new LevelModel();
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.levelService.getInfoLevel(this.id).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger("Cannot get lesson detail!");
      }else {
        this.levelModel = apiResponse.body;
      }
    });
   }

   updateLevel(){
    this.levelService.updateLevel(this.id ,this.levelModel).subscribe(apiResponse => {
      console.log(apiResponse);
      if(apiResponse.errorcode === RESPONSE_STATUS.FAIL) {
        this.alert.danger(apiResponse.message);
      }else {
        this.levelModel = new LevelModel();
        this.alert.success(apiResponse.message);
      }
    });
   }

}
