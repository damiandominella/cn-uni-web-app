import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  public news: Post[];
  public error: boolean;
  public isLoading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.isLoading = true;
    this.error = false;
    this.http.get(environment.api.endpoint + 'news')
      .subscribe((res: { count: number, data: Post[] }) => {
        this.news = res.data;
        this.isLoading = false;
      }, err => {
        this.error = true;
        this.isLoading = false;
      })
  }

}
