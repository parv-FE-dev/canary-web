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
import { SearchComponent } from './components/search/search.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ArchiveListsComponent } from './components/archive-lists/archive-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    SideBarComponent,
    TweetCardComponent,
    SearchBarComponent,
    HomeNavComponent,
    TrendingSuggestionsComponent,
    SearchComponent,
    ArchiveComponent,
    HomePageComponent,
    WelcomeComponent,
    SettingsComponent,
    SettingsPageComponent,
    ArchiveListsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'list', component: ListsComponent},
      {path: 'search', component: SearchComponent},
      {path: 'archives', component: ArchiveComponent},
      {path: 'settings', component: SettingsPageComponent}
    ]),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
