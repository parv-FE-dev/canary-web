import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

  private _url: string = 'https://api.twitter.com/2/tweets/search/recent'
  private _name: string = "Saxena";

  public likesCount = 0;
  public commentCount: number;
  postLiked = false;
  
  showModal = false;

  likeUnlikePost(){
    this.postLiked = !this.postLiked;
    if (this.postLiked === true) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }
  }

  tweetDetails() {
    
  }

  saveBookMark(){
    this.showModal = !this.showModal;  
  }
  constructor(private http: HttpClient) { this.likesCount; this.commentCount = 0 }

  ngOnInit(): void {
  }

}
