import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ChampionAboutComponent } from '../champion-info/champion-about/champion-about.component';
import { ChampionInfoComponent } from './champion-info.component';


export const mainRoutes: Routes = [
  {
    path: '',
    component: ChampionInfoComponent,
    children: [
      {
        path: 'about',
        component: ChampionAboutComponent,
        pathMatch: 'full'
      }
    ]
  }
]


@NgModule({
  declarations: [
    ChampionAboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class ChampionInfoModule { }
