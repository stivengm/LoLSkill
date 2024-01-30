import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

// Services
import { HttpClientModule } from '@angular/common/http';
import { InfoAccountComponent } from './components/widgets/info-account/info-account.component';

// Modules
import { AccountModule } from 'src/app/components/account/account.module';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
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
    InfoAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
