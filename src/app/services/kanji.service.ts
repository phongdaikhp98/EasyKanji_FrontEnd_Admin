import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';
import { KanjiCreateModel } from '../models/kanji-create-model';
import { KanjiModel } from '../models/kanji-model';

@Injectable({
  providedIn: 'root'
})
export class KanjiService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllKanjiPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/v1/kanjis', {params});
  }

  getInfoKanji(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/v1/kanjis/"+id);
  }

  createKanji(kanjiCreateModel : KanjiCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/v1/kanjis", kanjiCreateModel);
  }

  updateKanji(id : number, kanjiModel : KanjiModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/v1/kanjis/"+id,  kanjiModel);
  }

  deleteKanji(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/v1/kanjis/'+id,{});
  }
}
