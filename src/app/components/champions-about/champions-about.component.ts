import { Component } from '@angular/core';
import { GetChampionsService } from 'src/app/core/services/get-champions.service';

@Component({
  selector: 'app-champions-about',
  templateUrl: './champions-about.component.html',
  styleUrls: ['./champions-about.component.scss']
})
export class ChampionsAboutComponent {


  constructor(public championService: GetChampionsService) {

  }

  ngOnInit() {
    console.log(this.championService);
  }

}
