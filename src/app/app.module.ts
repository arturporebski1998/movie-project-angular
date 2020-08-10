import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieService } from './movie.service';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { UserRegistrationService } from './user-registration.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    MovieSearchComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    UserListComponent
  ],
  providers: [ UserRegistrationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }