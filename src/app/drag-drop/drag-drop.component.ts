import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    
  }
  imgSrc= 'assets/Chinese.jpg'

  movies = [
    'Episode I - The Phantom Menace',
    
  ];

  todo = [
    { id: 11, src:"assets/Chinese.jpg" },
    { id: 11, name: 'Dr Nice' },
    { id: 11, name: 'Dr Nice' },
    { id: 11, name: 'Dr Nice' },
  ];

  done = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
  }

}
