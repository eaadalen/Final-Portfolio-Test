import { Component } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent {
  ToDoList = 'https://eaadalen.github.io/to-do-list-app/';
  PokeDex = 'https://eaadalen.github.io/simple-js-app/#';
  RESTMovieAPI = 'https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/';
  ReactMovieAPI = 'https://myflix-client-eaadalen.netlify.app/';
  AngularMovieAPI = 'https://eaadalen.github.io/myFlix-Angular-Client/movies';
  CodingEventsApp = 'https://eaadalen.github.io/Meet_App/';
  ChatApp = 'https://github.com/eaadalen/chat-app';

  ToDoListGithub = 'https://github.com/eaadalen/to-do-list-app';
  PokeDexGithub = 'https://github.com/eaadalen/simple-js-app';
  RESTMovieAPIGithub = 'https://github.com/eaadalen/movie_api';
  ReactMovieAPIGithub = 'https://github.com/eaadalen/myFlix-client';
  AngularMovieAPIGithub = 'https://github.com/eaadalen/myFlix-Angular-Client';
  CodingEventsAppGithub = 'https://github.com/eaadalen/Meet_App';
  ChatAppGithub = 'https://github.com/eaadalen/chat-app';
}
