import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

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
  saveBookMark(){
    this.showModal = !this.showModal;  
  }
  constructor() { this.likesCount; this.commentCount = 0 }

  ngOnInit(): void {
  }

}