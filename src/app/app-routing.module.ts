import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TimelineComponent } from './components/movie/timeline/timeline.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:id', component: MovieComponent} ,
  { path: 'movies/:id/timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }