
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';

import { UserModel } from '../models/user-model';
import { UserCreateModel } from '../models/user-create-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }


  getAllUserPageSize(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);

    return this.http.get<ApiResponse>(environment.apiUrl+ '/auth/users', {params});
  }

  getInfoUser(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/auth/users/"+id);
  }

  createUser(userCreateModel : UserCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/auth/users", userCreateModel);
  }

  updateUser(id: number, userModel: UserModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/auth/users/"+id, userModel);
  }


}
