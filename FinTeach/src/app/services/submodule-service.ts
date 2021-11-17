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

  getAll(): Observable<Submodule[]> {
    return this.http.get<Submodule[]>(baseUrl);
  }

  getFromModuleId(id:any): Observable<Submodule[]> {
    return this.http.get<Submodule[]>(baseUrl+"/from_module_id/"+id);
  }


}
