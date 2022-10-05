import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommunityComponent } from './community/community.component';
import { SearchComponent } from './search/search.component';
import { DevelopersComponent } from './developers/developers.component';
import { PgNumComponent } from './pg-num/pg-num.component';
import { JoinComponent } from './join/join.component';
import { EndComponent } from './end/end.component';
import { FooterComponent } from './footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommunityComponent,
    SearchComponent,
    DevelopersComponent,
    PgNumComponent,
    JoinComponent,
    EndComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
