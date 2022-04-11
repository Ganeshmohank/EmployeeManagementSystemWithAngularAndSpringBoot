import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obj } from '@popperjs/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  private baseURL="http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) {  }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${(this.baseURL)}`);
  }
  createEmployee(employee :Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }
  deleteEmployee(id:number):Observable<Object>{
    //let params = new HttpParams();
    //params = params.append('itemId', id);
    //return this.httpClient.delete(`${this.baseURL}`,{params});
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }
  
}
