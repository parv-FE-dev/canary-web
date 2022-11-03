import { Component, OnInit } from '@angular/core';
import TwitterApi from '../../../api/helpers/TwitterApi';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    TwitterApi.getUserByUserName(
      "parv_94"
    );
    console.log("Checking data", TwitterApi.timelineFeed(
      false
    ))
  }

  ngOnInit(): void {
  }

}
