import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.Interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

private _history:string[]=[]
private apiKey:string= "nHnps0jaGDixPUbYfMyHHx2rIFMKvYmp";
private urlService:string="https://api.giphy.com/v1/gifs";
public results?: Gif[] = [];
get history(){
  return [...this._history];
}

constructor( private http:HttpClient){
  
    this._history = JSON.parse( localStorage.getItem("history")!) || [];  
    this.results  = JSON.parse( localStorage.getItem("results")!) || [];  
  
}

searchGifs( query: string= ""){
query.trim().toLocaleLowerCase();
if(!this._history.includes(query)){
  this._history.unshift(query);
  this._history = this._history.splice(0,10);

 localStorage.setItem("history", JSON.stringify( this._history))

}  

const Params = new HttpParams()
.set("api_key",this.apiKey)
.set("limit", "10")
.set("q",query);

this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params: Params} )
.subscribe((resp) => { 
  this.results = resp.data;
  localStorage.setItem("results", JSON.stringify( this.results));
});
}

}
