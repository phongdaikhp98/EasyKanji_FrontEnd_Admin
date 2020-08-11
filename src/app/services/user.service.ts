import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { UserCreateModel } from '../models/UserCreateModel';
import { ChangePasswordModel } from '../models/ChangePasswordModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }


  getInfoUser(id: number) {
    return this.http.get<ApiResponse>(environment.apiUrl + "/admin/users/"+id);
  }

  addMoney(id:number, money: number) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/admin/users/"+id+"/add/"+money, {});
  }

  subMoney(id:number, money: number) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/admin/users/"+id+"/sub/"+money, {});
  }

  createUser(userCreateModel : UserCreateModel) {
    return this.http.post<ApiResponse>(environment.apiUrl + "/admin/createUser", userCreateModel);
  }

  changeDisableUser(id: number) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/admin/users/disable/"+id,{});
  }

  changePassword(id: number,password: string) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/admin/users/"+id+"/"+password,{});
  }

  changePasswordUser(passwordModel: ChangePasswordModel) {
    return this.http.put<ApiResponse>(environment.apiUrl + "/user/change-password",passwordModel);
  }


  getAll(page: number, size: number, search: string) {
    const params = new HttpParams()
    .set('size', size+'')
    .set('page', page+'')
    .set('search', search);
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role !== 'ROLE_ADMIN') {
      return this.http.get<ApiResponse>(environment.apiUrl + '/user/users',{params});
    }
    else {
      return this.http.get<ApiResponse>(environment.apiUrl + '/admin/users/',{params});
    }
  }

}
