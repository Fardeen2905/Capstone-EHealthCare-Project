import { Injectable } from '@angular/core';
import { Imedicine } from '../models/medicines';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(private _http: HttpClient) {}
  getMedicines(): Observable<Imedicine[]> {
    return this._http.get<Imedicine[]>(
      'http://localhost:5048/api/Medicine/getmedicinelist'
    );
  }
  getMedicineById(id: number): Observable<Imedicine> {
    return this._http.get<Imedicine>(
      `http://localhost:5048/api/Medicine/getmedicinebyid?MedicineId=${id}`
    );
  }
  createMedicine(medicineitems: Imedicine): Observable<Imedicine> {
    return this._http.post<Imedicine>(
      `http://localhost:5048/api/Medicine/addmedicine`,
      medicineitems
    );
  }

  updateMedicineById(
    medicineitems: Imedicine,
    id: number
  ): Observable<Imedicine> {
    return this._http.put<Imedicine>(
      `http://localhost:5048/api/Medicine/updatemedicinebyid?MedicineId=${id}`,
      medicineitems
    );
  }

  deleteMedicineById(id: number): Observable<Imedicine> {
    return this._http.delete<Imedicine>(
      `http://localhost:5048/api/Medicine/deletemedicinebyid?MedicineId=${id}`
    );
  }
}
