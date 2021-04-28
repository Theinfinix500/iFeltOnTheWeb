import { CreateMovieComponent } from "./components/movies/create/createMovie.component";
import { MovieComponent } from "./components/movies/list/movie.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "movies/list", component: MovieComponent },
  { path: "movies/create", component: CreateMovieComponent },
  { path: "movies/edit/:movieid", component: CreateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
