import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Clinics } from './clinics';
import { Equipments } from './equipments';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url1: string = "http://localhost:3000/Clinics/"
  url2: string = "http://localhost:3000/Equipments/"
  
  getClinics() {
    return this.http.get<Clinics[]>(this.url1);
  }
  getEquipments() {
    return this.http.get<Equipments[]>(this.url2);
  }

  getEquipmentByID(id:number) {
    const url3= `http://localhost:3000/Equipments/${id}`;
    return this.http.get<Equipments[]>(url3);
  }
  getClinicByID(id:number) {
    const url4= `http://localhost:3000/Clinics/${id}`
    return this.http.get<Clinics[]>(url4);
  }

  deleteClinicByID(id: number) {
    const url4 = `http://localhost:3000/Clinics/${id}`
    return this.http.delete<Clinics[]>(url4);
  }

  deleteEquipmentByID(id: number) {
    const url3 = `http://localhost:3000/Equipments/${id}`;
    return this.http.delete<Equipments[]>(url3);
  }

  updateEquipmentByID(id: number,postData:Equipments) {
    const url3 = `http://localhost:3000/Equipments/${id}`;
    return this.http.put(url3,postData);
  }

  updateClinicByID(id: number, postData: Clinics) {
    const url4 = `http://localhost:3000/Clinics/${id}`
    return this.http.put(url4,postData);
  }

  addEquipment(postData: Equipments) {
    return this.http.post(this.url2, postData);
  }

  addClinic(postData: Clinics) {
    return this.http.post(this.url1, postData);
  }
}
