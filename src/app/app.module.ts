import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { TrendingSuggestionsComponent } from './trending-suggestions/trending-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetCardComponent,
    SearchBarComponent,
    HomeNavComponent,
    TrendingSuggestionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
