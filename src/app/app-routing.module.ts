import { CreateMovieComponent } from './components/movies/create/createMovie.component';
import { MovieComponent } from './components/movies/movie.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "movies", component: MovieComponent },
  { path: "home", component: HomeComponent },
  { path: "movies/createMovie", component: CreateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}