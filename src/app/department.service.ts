import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDepartment } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url: string = "/assets/data/departments.json"
  constructor(private http: HttpClient) { }

  getDepartments(){
    return this.http.get<IDepartment[]>(this._url);
  }
}
