import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAccountService {

  apiKey = 'RGAPI-e26b8219-d0f7-4308-a349-f05093123266'

  url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/XGameGamePlay0X/LAN?api_key=" + this.apiKey;

  constructor(private http: HttpClient) { }

  getAccount() {

    return this.http.get(this.url);

  }
}
