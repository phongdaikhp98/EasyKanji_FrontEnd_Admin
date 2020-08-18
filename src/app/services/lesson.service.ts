
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';
import { LessonCreateModel } from '../models/lesson-create-model';
import { LessonModel } from '../models/lesson-model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllLessonsPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
    .set("size", size + "")
    .set("page", page + "")
    .set("search", search);
    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/lessons', {params});
  }

  getInfoLesson(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/lessons/"+id);
  }

  createLesson(LessonCreateModel : LessonCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/lessons", LessonCreateModel);
  }

  updateLesson(id: number, lessonModel: LessonModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/lessons/"+id, lessonModel);
  }

  deleteLesson(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/lessons/'+id);
  }
}
