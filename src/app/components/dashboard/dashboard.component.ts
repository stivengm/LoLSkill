import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  placeHolder = "Summoner name...";
  summonerName = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    var summonerNameLocalStorage = localStorage.getItem('summonerName');
    this.placeHolder = summonerNameLocalStorage ?? '';
    
    document.getElementById('landing_page')!.style.setProperty('height', 'calc(' + window.innerHeight +'px - 60px)');
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
