import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://www.thecocktaildb.com/api/json/v1/1/random.php--random one 
  // -----random 10
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  }

}
