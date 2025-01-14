import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/ApiService/event.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Book } from '../../models/Book';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-api-event',
  standalone: true,
  imports: [JsonPipe, AsyncPipe,HttpClientModule],
  providers: [EventService], 
  templateUrl: './api-event.component.html',
  styleUrl: './api-event.component.css'
})
export class ApiEventComponent implements OnInit {
  
  event:Book[]=[];
constructor(public eventService:EventService){}
  ngOnInit(): void {
this.eventService.getEvents()//.subscribe(data=>{
//  this.event=data;
// })
  }

}
