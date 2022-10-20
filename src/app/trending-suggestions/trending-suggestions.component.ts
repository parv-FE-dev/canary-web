import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-suggestions',
  templateUrl: './trending-suggestions.component.html',
  styleUrls: ['./trending-suggestions.component.scss']
})
export class TrendingSuggestionsComponent implements OnInit {

  public location: string;
  public trending: string;

  constructor() { this.location = "Worldwide"; this.trending = "#TestTweet" }

  ngOnInit(): void {
  }

}
