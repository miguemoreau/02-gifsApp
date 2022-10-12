import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

@ViewChild("txtSearch") txtSearch!:ElementRef<HTMLInputElement>; 

constructor( private gifService:GifsService){}

search(terms : string){
  
  const Value = this.txtSearch.nativeElement.value;

  if(Value.trim().length == 0 )
  {
    return ;
  }
  this.gifService.searchGifs(Value)
  this.txtSearch.nativeElement.value = "";
}
}
