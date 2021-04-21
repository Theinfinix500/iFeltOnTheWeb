import { MoviesService } from "./components/movie.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieComponent } from "./components/movies/list/movie.component";
import { CreateMovieComponent } from "./components/movies/create/createMovie.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    CreateMovieComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
