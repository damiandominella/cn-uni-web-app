import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-study-plan-page',
  templateUrl: './study-plan-page.component.html',
  styleUrls: ['./study-plan-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudyPlanPageComponent implements OnInit {

  public subjects: Subject[];
  public isPartTime: boolean = false;
  public error: boolean;
  public isLoading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.isLoading = true;
    this.error = false;
    this.subjects = [];
    let queryParam = this.isPartTime ? '1' : '0';
    this.http.get(environment.api.endpoint + 'study_plan?part_time=' + queryParam)
      .subscribe((res: { count: number, data: Subject[] }) => {
        this.subjects = res.data;
        this.isLoading = false;
      }, err => {
        this.error = true;
        this.isLoading = false;
      })
  }

  public onSwitch(isPartTime: boolean): void {
    this.isPartTime = isPartTime;
    this.loadData();
  }

}
