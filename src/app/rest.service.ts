import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clinics } from './clinics';
import { Equipments } from './equipments';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url1: string = "http://localhost:3000/Clinics/"
  url2: string = "http://localhost:3000/Equipments/"

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getClinics() {
    return this.http.get<Clinics[]>(this.url1);
  }
  getEquipments() {
    return this.http.get<Equipments[]>(this.url2);
  }

  getEquipmentByID(id: number) {
    const url3 = `http://localhost:3000/Equipments/${id}`;
    return this.http.get<Equipments[]>(url3);
  }
  getClinicByID(id: number) {
    const url4 = `http://localhost:3000/Clinics/${id}`
    return this.http.get<Clinics[]>(url4);
  }

  deleteClinicByID(id: number) {
    const url4 = `http://localhost:3000/Clinics/${id}`
    return this.http.delete<Clinics[]>(url4)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteEquipmentByID(id: number) {
    const url3 = `http://localhost:3000/Equipments/${id}`;
    return this.http.delete<Equipments[]>(url3)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  updateEquipmentByID(id: number, postData: Equipments) {
    const url3 = `http://localhost:3000/Equipments/${id}`;
    return this.http.put(url3, postData)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  updateClinicByID(id: number, postData: Clinics) {
    const url4 = `http://localhost:3000/Clinics/${id}`
    return this.http.put(url4, postData)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  addEquipment(postData: Equipments) {
    return this.http.post(this.url2, postData)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  addClinic(postData: Clinics) {
    return this.http.post(this.url1, postData)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}
