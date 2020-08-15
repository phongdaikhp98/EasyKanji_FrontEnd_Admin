import { ApiResponse } from './../models/ApiResponse';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { UserAuth } from "../models/UserAuth";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { RESPONSE_STATUS } from "../../environments/environment";
import { map } from "rxjs/internal/operators/map";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserAuth>;
  public currentUser: Observable<UserAuth>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserAuth>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserAuth {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    const profile = {
      email: username,
      password: password,
    };
    return this.http.post<ApiResponse>(environment.apiUrl + "/auth/signinv2", profile).pipe(
      map((response) => {
        console.log(response);
        // login successful if there's a jwt token in the response
        if (response.errorcode === RESPONSE_STATUS.SUCCESS) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(response.body));
          this.currentUserSubject.next(response.body);
        }
        return response;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
