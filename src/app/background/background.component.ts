import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  imageSrc = '../../assets/Chinese.jpg' 

  constructor() { }

  ngOnInit(): void {
  }
  images=[
    {value: ' ../../assets/Chinese.jpg'},
  ];

}
