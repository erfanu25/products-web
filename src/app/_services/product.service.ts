import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/v1/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<any> {
    return this.http.get(API_URL + 'list ');
  }

  updateProduct(product): Observable<any> {
    return this.http.put(API_URL + 'update/' + product.id, {
      productName: product.productName,
      price: product.price,
      createDate: product.createDate,
    }, httpOptions);
  }

  createProduct(product): Observable<any> {
    return this.http.post(API_URL + 'create', {
      productName: product.productName,
      price: product.price,
      createDate: product.createDate,
    }, httpOptions);
  }

}
