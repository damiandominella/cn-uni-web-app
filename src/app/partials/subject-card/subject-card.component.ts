import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectCardComponent implements OnInit {

  @Input() subject: Subject;

  constructor() { }

  ngOnInit() {
  }

  public onSubjectClick($event: any): void {
    if (this.subject.link) {
      window.open(this.subject.link, '_blank');
    }
  }

}
