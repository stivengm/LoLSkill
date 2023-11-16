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

// Services
import { HttpClientModule } from '@angular/common/http';
import { ChampionsAboutComponent } from './components/champions-about/champions-about.component';

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
    ChampionsAboutComponent
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
