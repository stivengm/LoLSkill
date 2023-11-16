import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChampionsModel } from '../models/champions.model';

@Injectable({
  providedIn: 'root'
})
export class GetChampionsService {

  // Obtener campeones
  url = "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/es_ES/champion.json";
  constructor(private http: HttpClient) { }

  getChampions() {
    return this.http.get<ChampionsModel>(this.url);
  }
}
