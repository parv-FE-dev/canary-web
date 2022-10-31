import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { TrendingSuggestionsComponent } from './components/trending-suggestions/trending-suggestions.component';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { PersonliseFeedComponent } from './components/personlise-feed/personlise-feed.component';
import { SuperPrivateListComponent } from './components/super-private-list/super-private-list.component';
import { ThreadsComponent } from './components/threads/threads.component';

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
    SuperPrivateListComponent,
    ThreadsComponent
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
