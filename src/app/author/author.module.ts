import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule} from '../shared/shared.module'
import { routing } from './author.route'
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list//author-list.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { AuthorActions} from './actions/';
import { AuthorEffects } from './effects/';
import { services } from './effects'


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListComponent,
    AuthorSearchComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    EffectsModule.run(AuthorEffects),
  ],
  providers: [
    AuthorActions,
    services
  ],
})
export class AuthorModule { }
