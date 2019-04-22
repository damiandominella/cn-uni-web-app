import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  public blog: Post[];
  public error: boolean;
  public isLoading: boolean;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.isLoading = true;
    this.error = false;
    this.http.get(environment.api.endpoint + 'blog')
      .subscribe((res: { count: number, data: Post[] }) => {
        this.blog = res.data;
        this.isLoading = false;
      }, err => {
        this.error = true;
        this.isLoading = false;
      })
  }
}
