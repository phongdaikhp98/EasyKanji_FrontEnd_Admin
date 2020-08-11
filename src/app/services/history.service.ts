import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { ApiResponse } from "../models/ApiResponse";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HistoryService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAll(page: number, size: number, search: string) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "")
      .set("search", search);
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.role === "ROLE_ADMIN") {
      return this.http.get<ApiResponse>(environment.apiUrl + "/admin/history", {
        params,
      });
    }
  }

  getAllByUser(page: number, size: number) {
    const params = new HttpParams()
      .set("size", size + "")
      .set("page", page + "");
    return this.http.get<ApiResponse>(environment.apiUrl + "/user/history", {
      params,
    });
  }
}
