import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ApiResponse } from '../models/ApiResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestUserService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllUserPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/auth/users', {params});
  }

  deleteUser(id:number) {
    return this.http.delete<ApiResponse>(environment.apiUrl+'/auth/users/'+id,{});
  }
}
