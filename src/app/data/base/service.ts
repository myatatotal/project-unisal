import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getOne(id: string) {
  //   return this.http
  //     .get<any>(`http://localhost:3000/posts/${id}`)
  //     .pipe(map((res: any) => res));
  // }

  getProdutos() {
    return this.http
      .get<any>('http://localhost:3000/produtos')
      //     .get<any>('https://803f-3-145-100-173.ngrok.io/products')
      .pipe(map((res: any) => res));
  }

  getClientes() {
    return this.http
      .get<any>('http://localhost:3000/clientes')
      .pipe(map((res: any) => res));
  }

  getCategorias() {
    return this.http
      .get<any>('http://localhost:3000/categorias')
      .pipe(map((res: any) => res));
  }

  delete(id: string) {
    return this.http
      .delete<any>(`http://localhost:3000/produtos/${id}`)
      .pipe(map((res: any) => res));
  }
}
