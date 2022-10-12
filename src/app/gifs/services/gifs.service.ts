import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.Interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

private _history:string[]=[]
private apiKey:string= "nHnps0jaGDixPUbYfMyHHx2rIFMKvYmp";
public results?: Gif[] = [];
get history(){
  return [...this._history];
}

constructor( private http:HttpClient){}

searchGifs( query: string= ""){
query.trim().toLocaleLowerCase();
if(!this._history.includes(query)){
  this._history.unshift(query);
  this._history = this._history.splice(0,10);
}  

this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${ query }&limit=10&offset=0&rating=g&lang=en`)
.subscribe((resp) => { 
  console.log( resp.data);
  this.results = resp.data;
});
}
}
