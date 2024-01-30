import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { SummaryComponent } from './summary/summary.component';
import { LeaguesComponent } from './leagues/leagues.component';


export const mainRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'summary',
        component: SummaryComponent,
        pathMatch: 'full'
      },
      {
        path: 'leagues',
        component: LeaguesComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    AccountComponent,
    SummaryComponent,
    LeaguesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class AccountModule { }
