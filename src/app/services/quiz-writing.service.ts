import { QuizWritingModel } from './../models/quiz-writing-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';
import { KanjiCreateModel } from '../models/kanji-create-model';
import { KanjiModel } from '../models/kanji-model';
import { QuizWritingCreateModel } from '../models/quiz-writing-create-model';

@Injectable({
  providedIn: 'root'
})
export class QuizWritingService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllQuizWritingPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/quizzesWriting', {params});
  }

  getInfoQuizWriting(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/quizzesWriting/"+id);
  }

  createQuizWriting(quizWritingCreateModel : QuizWritingCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/quizzesWriting", quizWritingCreateModel);
  }

  updateQuizWriting(id : number, quizWritingModel : QuizWritingModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/quizzesWriting/"+id,  quizWritingModel);
  }

  deleteQuizWriting(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/quizzesWriting/'+id,{});
  }
}
