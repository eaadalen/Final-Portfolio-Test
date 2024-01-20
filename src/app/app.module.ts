import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainViewComponent } from './main-view/main-view.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { RestMovieApiComponent } from './rest-movie-api/rest-movie-api.component';
import { ReactMovieApiComponent } from './react-movie-api/react-movie-api.component';
import { AngularMovieApiComponent } from './angular-movie-api/angular-movie-api.component';
import { CodingEventsComponent } from './coding-events/coding-events.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

const appRoutes: Routes = [
  { path: 'main-view' , component: MainViewComponent },
  { path: 'to-do-list' , component: ToDoListComponent },
  { path: 'pokedex' , component: PokedexComponent },
  { path: 'rest-movie-api' , component: RestMovieApiComponent },
  { path: 'react-movie-api' , component: ReactMovieApiComponent },
  { path: 'angular-movie-api' , component: AngularMovieApiComponent },
  { path: 'coding-events' , component: CodingEventsComponent },
  { path: 'chat-app' , component: ChatAppComponent },
  { path: '', redirectTo: 'main-view', pathMatch: 'prefix' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ToDoListComponent,
    PokedexComponent,
    RestMovieApiComponent,
    ReactMovieApiComponent,
    AngularMovieApiComponent,
    CodingEventsComponent,
    ChatAppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }