import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { StudyPlanPageComponent } from './pages/study-plan-page/study-plan-page.component';
import { PostCardComponent } from './partials/post-card/post-card.component';
import { TeacherCardComponent } from './partials/teacher-card/teacher-card.component';
import { SubjectCardComponent } from './partials/subject-card/subject-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    NewsPageComponent,
    BlogPageComponent,
    TeachersPageComponent,
    StudyPlanPageComponent,
    PostCardComponent,
    TeacherCardComponent,
    SubjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
