import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { StudyPlanPageComponent } from './pages/study-plan-page/study-plan-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  },
  {
    path: 'study-plan',
    component: StudyPlanPageComponent
  },
  {
    path: 'teachers',
    component: TeachersPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
