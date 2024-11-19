import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information-popup',
  standalone: true,
  imports: [],
  templateUrl: './information-popup.component.html',
  styleUrl: './information-popup.component.css'
})
export class InformationPopupComponent {
text:string='';
showPopup(txt:string){
  this.text= txt;
}

}
