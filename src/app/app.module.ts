import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { MoviesComComponent } from './movies-com/movies-com.component';
import { ReactiveFormsModule } from '@angular/forms'
const appRoutes:Routes =[
 
  {path:'home' ,component:HomeComponent},
  {path :'' , redirectTo :'/home', pathMatch :'full'},
  {path:'about' ,component:AboutComponent},
  {path:'contacts' ,component:ContactsComponent},
  {path:'project' ,component:ProjectComponent},
  {path:'movie' ,component:MoviesComComponent},
  {path:"**" ,component:NotfoundComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NavbarComponent,
    ProjectComponent,
    NotfoundComponent,
    MoviesComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
