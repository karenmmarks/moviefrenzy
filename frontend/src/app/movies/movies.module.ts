import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';

@NgModule({
    imports: [
      HttpClientModule,
      RouterModule.forChild([
        { path: 'movies', component: MoviesComponent }
      ]),
      FormsModule
     ],
    declarations: [
      MoviesComponent 
    ],
    exports: [ ],
    providers: [
      HttpClientModule
    ]
  })
  export class MoviesModule { }
