import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private url="https://localhost:7206/api/Books";
event$:Observable<Book[]> | undefined;
  constructor(private http:HttpClient) { }

  // getEvents(): Observable<Book[]>{
  //   return this.http.get<Book[]>(this.url);
  // }
  getEvents(){
 this.http.get<Book[]>(this.url).subscribe(data=>{
  this.event$=of(data);
 })
  }
  addEvent(event:Book): Observable<Book> {
return this.http.post<Book>(this.url,event)
  }
}
