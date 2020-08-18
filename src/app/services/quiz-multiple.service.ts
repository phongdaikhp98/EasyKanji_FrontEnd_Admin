import { QuizMultipleCreateModel } from './../models/quiz-multiple-create-model';
import { QuizMultipleModel } from './../models/quiz-multiple-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuizMultipleService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllQuizMultiplePageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/quizzesMultiple', {params});
  }

  getInfoQuizMultiple(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/quizzesMultiple/"+id);
  }

  createQuizMultiple(quizMultipleCreateModel : QuizMultipleCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/quizzesMultiple", quizMultipleCreateModel);
  }

  updateQuizMultiple(id : number, quizMultipleModel : QuizMultipleModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/quizzesMultiple/"+id,  quizMultipleModel);
  }

  deleteQuizMultiple(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/quizzesMultiple/'+id,{});
  }
}
