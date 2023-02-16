import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  placeHolder = "Summoner name...";
  ngOnInit() {
    document.getElementById('landing_page')!.style.setProperty('height', 'calc(' + window.innerHeight +'px - 60px)');
  }
}
