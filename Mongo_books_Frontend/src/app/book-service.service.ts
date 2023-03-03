import { Injectable } from '@angular/core';
import {Observable } from 'rxjs'
import { book } from 'src/book';
import {HttpClient} from '@angular/common/http'

const baseurl='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  getAll():Observable<book[]>{
    return this.http.get<book[]>(`${baseurl}/books`)

  }
  deleteByID(id:any):Observable<book>{
    return this.http.delete<book>(`${baseurl}/delete/${id}`)
  }
  add(data:any):Observable<any>{
    return this.http.post(`${baseurl}/books`,data)
  }
}
