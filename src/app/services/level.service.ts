import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';
import { LevelCreateModel } from '../models/level-create-model';
import { LevelModel } from '../models/level-model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllLevelsPageSize() {
    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/levels');
  }

  getInfoLevel(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/levels/"+id);
  }

  createLevel(levelCreateModel : LevelCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/levels", levelCreateModel);
  }

  updateLevel(id: number, levelModel: LevelModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/levels/"+id, levelModel);
  }

  deleteLevel(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/levels/'+id);
  }
}
