import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './summary.pipe';
import { LikeComponent } from './like/like.component';
import { PanelComponent } from './panel/panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    LikeComponent,
    PanelComponent,
    TabsComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    CourseFormComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      // more specific paths should be defined first
      {path: '', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
