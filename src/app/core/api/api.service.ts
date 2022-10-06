import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };

  httpOptionsForm = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };

  httpOptionsFormFile = {
    headers: new HttpHeaders({
      //'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    })
  };

  constructor(private _httpClient:HttpClient) { }

  public getData(nombreQuery,queryParams): Observable<any>{
    return this._httpClient.get(`${environment.serverUrl}/api/${nombreQuery}?${queryParams}`,this.httpOptions);
  }

  public setData(nombreQuery,dataQuery): Observable<any>{
    return this._httpClient.post(`${environment.serverUrl}/api/${nombreQuery}`,dataQuery,this.httpOptions);
  }

  public setFile(nombreQuery,dataForm): Observable<any>{
    return this._httpClient.post(`${environment.serverUrl}/api/${nombreQuery}`,dataForm,this.httpOptionsFormFile);
  }

  public deleteData(nombreQuery,idData): Observable<any>{
    return this._httpClient.delete(`${environment.serverUrl}/api/${nombreQuery}/${idData}`,this.httpOptions);
  }

}
