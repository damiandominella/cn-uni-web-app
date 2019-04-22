import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeacherCardComponent implements OnInit {

  @Input() teacher: Teacher;

  constructor() { }

  ngOnInit() {
  }

}
