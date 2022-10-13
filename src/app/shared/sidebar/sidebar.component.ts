import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get history(){
    return this.gifsService.history;
  }
  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }
  searchHistory( term: string){
   this.gifsService.searchGifs(term);
  }
}
