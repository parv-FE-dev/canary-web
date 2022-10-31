import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { TrendingSuggestionsComponent } from './trending-suggestions/trending-suggestions.component';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { PersonliseFeedComponent } from './personlise-feed/personlise-feed.component';
import { SuperPrivateListComponent } from './super-private-list/super-private-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    SideBarComponent,
    TweetCardComponent,
    SearchBarComponent,
    HomeNavComponent,
    TrendingSuggestionsComponent,
    EmptyListComponent,
    PersonliseFeedComponent,
    SuperPrivateListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'list', component: ListsComponent},
      {path: 'personlise-feed', component: PersonliseFeedComponent}
    ]),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
