
import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { AlertService } from 'ngx-alerts';
import { RESPONSE_STATUS } from '../../../../environments/environment';
import { LevelCreateModel } from '../../../models/level-create-model';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {

  levelModel: LevelCreateModel;
  constructor(private levelService: LevelService, private alert: AlertService) { }

  ngOnInit(): void {
    this.levelModel = new LevelCreateModel();
  }

  createLevel() {
    if(!this.levelModel.name || !this.levelModel.description ) {
      this.alert.danger('Field cannot empty');
      return;
    }
    this.levelService.createLevel(this.levelModel).subscribe(result => {
      if(result.errorcode === RESPONSE_STATUS.SUCCESS) {
        this.alert.success(result.message);
        this.levelModel = new LevelCreateModel();
      }else {
        this.alert.danger(result.message);
      }
    })
  }

}
