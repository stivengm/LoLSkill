import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './components/champions/champions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChampionsAboutComponent } from './components/champions-about/champions-about.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'summoner/:region/:summonerName',
    loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'champion/:champion',
    loadChildren: () => import('./components/champion-info/champion-info.module').then(m => m.ChampionInfoModule)
  },
  {
    path: 'champions',
    component: ChampionsComponent,
    pathMatch: 'full'
  },
  {
    path: 'champion/:id',
    component: ChampionsAboutComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
