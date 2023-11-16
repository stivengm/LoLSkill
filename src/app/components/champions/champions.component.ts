import { Component } from '@angular/core';
import { GetChampionsService } from 'src/app/core/services/get-champions.service';
import { ChampionsModel, data } from 'src/app/core/models/champions.model';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent {

  constructor(public championService: GetChampionsService) {}

  champions: Array<data> = [];


  ngOnInit() {
    this.championService.getChampions().subscribe((champions: ChampionsModel) => {
      
      let keys = Object.keys(champions.data);
      var newObject = Object.entries(champions.data);

      for (let i = 0; i < keys.length; i++) {
        this.champions.push(newObject[i][1])
      }

    });
  }


}
