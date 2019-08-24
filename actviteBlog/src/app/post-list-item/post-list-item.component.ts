import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {


  @Input() title: string;
  @Input() content: string;
  @Input() loveIts1: number = 0;
  @Input() created_at: Date;
  @Input() loveIts2: number = 0;

  constructor() { }

  ngOnInit() {
  }

  good() {

    this.loveIts1 += 1;
    console.log(this.loveIts1);
  }

  notGood() {

    this.loveIts2 += 1;
    console.log(this.loveIts2);
  }


}







