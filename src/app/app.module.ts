import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FreeChampionsComponent } from './widgets/free-champions/free-champions.component';
import { ChampionsAboutComponent } from './components/champions-about/champions-about.component';
import { SummaryComponent } from './components/account/summary/summary.component';
import { CurrentGameComponent } from './components/account/current-game/current-game.component';
import { PerformanceComponent } from './components/account/championPerformance/performance/performance.component';
import { ChampionMaestriesComponent } from './components/account/championPerformance/champion-maestries/champion-maestries.component';
import { LeaguesComponent } from './components/account/leagues/leagues.component';
import { MatchesComponent } from './components/account/matches/matches.component';

// Services
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    BlogComponent,
    ChampionsComponent,
    AboutComponent,
    ContactUsComponent,
    FreeChampionsComponent,
    ChampionsAboutComponent,
    SummaryComponent,
    CurrentGameComponent,
    PerformanceComponent,
    ChampionMaestriesComponent,
    LeaguesComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
