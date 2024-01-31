import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ENVIRONMENT } from 'src/environments/environment';

import { ChampionsModel, FreeChampionsModel } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class GetChampionsService {

  // Obtener campeones
  url = "https://ddragon.leagueoflegends.com/cdn/14.2.1/data/es_ES/champion.json";
  constructor(private http: HttpClient) { }

  getChampions() {
    return this.http.get<ChampionsModel>(this.url);
  }

  getFreeChampions() {
    var api = "https://la1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" + ENVIRONMENT.apiKey;
    return this.http.get<FreeChampionsModel>(api);
  }
}
