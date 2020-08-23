
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";


import { AppComponent } from "./app.component";

// Import containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AlertModule } from 'ngx-alerts';
const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";

// Import routing module
import { AppRoutingModule } from "./app.routing";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./auth/jwt.interceptor";
import { ErrorInterceptor } from "./auth/error.interceptor";
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddKanjiComponent } from './views/kanji/add-kanji/add-kanji.component';
import { ListKanjiComponent } from './views/kanji/list-kanji/list-kanji.component';
import { EditKanjiComponent } from './views/kanji/edit-kanji/edit-kanji.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { AddLessonComponent } from './views/lesson/add-lesson/add-lesson.component';
import { ListLessonComponent } from './views/lesson/list-lesson/list-lesson.component';
import { EditLessonComponent } from './views/lesson/edit-lesson/edit-lesson.component';
import { ListVocabularyComponent } from './views/vocabulary/list-vocabulary/list-vocabulary.component';
import { EditVocabularyComponent } from './views/vocabulary/edit-vocabulary/edit-vocabulary.component';
import { AddVocabularyComponent } from './views/vocabulary/add-vocabulary/add-vocabulary.component';
import { ListQuizMultipleComponent } from './views/quizMultiple/list-quiz-multiple/list-quiz-multiple.component';
import { EditQuizMultipleComponent } from './views/quizMultiple/edit-quiz-multiple/edit-quiz-multiple.component';
import { AddQuizMultipleComponent } from './views/quizMultiple/add-quiz-multiple/add-quiz-multiple.component';
import { ListLevelComponent } from './views/level/list-level/list-level.component';
import { AddLevelComponent } from './views/level/add-level/add-level.component';
import { EditLevelComponent } from './views/level/edit-level/edit-level.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AddKanjiComponent,
    ListKanjiComponent,
    EditKanjiComponent,
    ListUserComponent,
    EditUserComponent,
    AddLessonComponent,
    ListLessonComponent,
    EditLessonComponent,
    ListVocabularyComponent,
    EditVocabularyComponent,
    AddVocabularyComponent,
    ListQuizMultipleComponent,
    EditQuizMultipleComponent,
    AddQuizMultipleComponent,
    ListLevelComponent,
    AddLevelComponent,
    EditLevelComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
