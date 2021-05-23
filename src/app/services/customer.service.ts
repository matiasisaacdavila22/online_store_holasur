import { Injectable } from '@angular/core';
import { CustomerModel} from '../models/customer.model';
import { HttpClient, HttpHeaders }  from '@angular/common/http'
import {ServiceConfig} from '../config/service-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  entity = 'customer';

  constructor(
    private http: HttpClient
  ) { }

  CustomerRegistering(customer: CustomerModel): Observable<CustomerModel>{
    return this.http.post<CustomerModel>(`/customer`, customer, {headers: new HttpHeaders({

    })
  });
 
 }
  
}
