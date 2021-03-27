import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/movies/list/list.component';
import { CreateComponent } from './components/movies/create/create.component';

const routes:Routes = [
    {path:"", component:HomeComponent},
    {path:"movies", component:ListComponent},
    {path:"movies/create", component:CreateComponent},
] 

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}