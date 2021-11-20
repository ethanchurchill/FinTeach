import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Submodule } from '../models/submodule-model';

const baseUrl = 'http://localhost:8080/api/submodule';

@Injectable({
  providedIn: 'root'
})
export class SubmoduleService {

  constructor(private http: HttpClient) { }

  // API request to database to get all submodules.
  getAll(): Observable<Submodule[]> {
    return this.http.get<Submodule[]>(baseUrl);
  }

  // API request to database to get submodules based on parent module id.
  getFromModuleId(id:any): Observable<Submodule[]> {
    return this.http.get<Submodule[]>(baseUrl+"/from_module_id/"+id);
  }


}
