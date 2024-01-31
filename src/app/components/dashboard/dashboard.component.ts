import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

import { GetChampionsService } from 'src/app/core/services/get-champions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  placeHolder = "Summoner name...";
  summonerName = "";


  freeChampions: Array<string> = [];
  freeChampionsNewPlayers: Array<string> = [];
  maxNewPlayerLevel = 0;

  constructor(private route: ActivatedRoute, private router: Router, public getChampionsService: GetChampionsService) {}

  ngOnInit() {
    var summonerNameLocalStorage = localStorage.getItem('summonerName');
    this.placeHolder = summonerNameLocalStorage ?? '';
    
    document.getElementById('landing_page')!.style.setProperty('height', 'calc(' + window.innerHeight +'px - 60px)');

    this.getChampionsService.getFreeChampions().subscribe(( data ) => {
      console.log(data);
      this.freeChampions = data.freeChampionIds;
      this.freeChampionsNewPlayers = data.freeChampionIdsForNewPlayers;
      this.maxNewPlayerLevel = data.maxNewPlayerLevel;
    })
  }

  searchSummonerName() {
    // TODO: Ejecutar el loader.
    this.router.navigate([`summoner/LAN/${this.summonerName}/summary`], { relativeTo: this.route });
    
    // TODO: Almacenar la información en el LocalStorage para poder sacar una lista después de los recientes.
    // var test = []
    var searchRecient = localStorage.getItem('searchRecient');
    var searchParse;

    if (!searchRecient?.includes(this.summonerName) || searchRecient == null) {
      searchParse = JSON.parse(searchRecient ?? "[]");
      searchParse.push(this.summonerName);
      console.log("No existe");
      localStorage.setItem('searchRecient', JSON.stringify(searchParse));
    }
    
  }

}
