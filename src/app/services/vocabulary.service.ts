import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';
import { KanjiCreateModel } from '../models/kanji-create-model';
import { KanjiModel } from '../models/kanji-model';
import { VocabularyCreateModel } from '../models/vocabulary-create-model';
import { VocabularyModel } from '../models/vocabulary-model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor(    private http: HttpClient,
    private authenticationService: AuthenticationService
    ) { }

  getAllVocabularyPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/vocabs', {params});
  }

  getInfoVocabulary(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/vocabs/"+id);
  }

  createVocabulary(vocabularyCreateModel : VocabularyCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/vocabs", vocabularyCreateModel);
  }

  updateVocabulary(id: number, vocabularyModel: VocabularyModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/vocabs/"+id, vocabularyModel);
  }

  deleteVocabulary(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/vocabs/'+id);
  }
}
