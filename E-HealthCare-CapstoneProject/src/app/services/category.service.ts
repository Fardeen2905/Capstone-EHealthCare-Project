import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) {}
  getCategories(): Observable<Icategory[]> {
    return this._http.get<Icategory[]>(
      'http://localhost:5048/api/Category/getcategorylist'
    );
  }
  getCategoryById(id: number): Observable<Icategory> {
    return this._http.get<Icategory>(
      `http://localhost:5048/api/Category/getcategorybyid?CategoryId=${id}`
    );
  }
  createCategory(categoryitems: Icategory): Observable<Icategory> {
    return this._http.post<Icategory>(
      `http://localhost:5048/api/Category/addcategory`,
      categoryitems
    );
  }

  updateCategoryById(
    categoryitems: Icategory,
    id: number
  ): Observable<Icategory> {
    return this._http.put<Icategory>(
      `http://localhost:5048/api/Category/updatecategorybyid?id=${id}`,
      categoryitems
    );
  }

  deleteCategoryById(id: number): Observable<Icategory> {
    return this._http.delete<Icategory>(
      `http://localhost:5048/api/Category/deletecategorybyid?id=${id}`
    );
  }
}