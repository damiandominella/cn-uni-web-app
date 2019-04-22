import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Teacher } from 'src/app/interfaces/teacher';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {

  public teachers: Teacher[];
  public error: boolean;
  public isLoading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.isLoading = true;
    this.error = false;
    this.http.get(environment.api.endpoint + 'teachers')
      .subscribe((res: { count: number, data: Teacher[] }) => {
        this.teachers = res.data;
        this.isLoading = false;
      }, err => {
        this.error = true;
        this.isLoading = false;
      });
  }
}
