import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  author: string = 'Long';
  students: Student[] = [
    new Student('Kim', 'Green', '10'),
    new Student('Long', 'Blue', '11'),
    new Student('Elisha', 'Yellow', '3'),
    new Student('Phuc', 'Black', '8'),
    new Student('Eric', 'Blue', '4')
  ];
  constructor() { }

  ngOnInit() {
  }

}
