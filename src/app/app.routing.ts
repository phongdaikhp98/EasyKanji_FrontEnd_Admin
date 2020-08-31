import { ListLevelComponent } from './views/level/list-level/list-level.component';
import { ListQuizMultipleComponent } from './views/quizMultiple/list-quiz-multiple/list-quiz-multiple.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { EditKanjiComponent } from './views/kanji/edit-kanji/edit-kanji.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { AddKanjiComponent } from './views/kanji/add-kanji/add-kanji.component';
import { ListKanjiComponent } from './views/kanji/list-kanji/list-kanji.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { ListLessonComponent } from './views/lesson/list-lesson/list-lesson.component';
import { AddLessonComponent } from './views/lesson/add-lesson/add-lesson.component';
import { EditLessonComponent } from './views/lesson/edit-lesson/edit-lesson.component';
import { ListVocabularyComponent } from './views/vocabulary/list-vocabulary/list-vocabulary.component';
import { AddVocabularyComponent } from './views/vocabulary/add-vocabulary/add-vocabulary.component';
import { EditVocabularyComponent } from './views/vocabulary/edit-vocabulary/edit-vocabulary.component';
import { AddQuizMultipleComponent } from './views/quizMultiple/add-quiz-multiple/add-quiz-multiple.component';
import { EditQuizMultipleComponent } from './views/quizMultiple/edit-quiz-multiple/edit-quiz-multiple.component';
import { AddLevelComponent } from './views/level/add-level/add-level.component';
import { EditLevelComponent } from './views/level/edit-level/edit-level.component';



export const routes: Routes = [
  {
    path: "",
    redirectTo: "list-user",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    // data: {
    //   title: "Home",
    // },
    children: [
      // {
      //   path: "dashboard",
      //   loadChildren: () =>
      //     import("./views/dashboard/dashboard.module").then(
      //       (m) => m.DashboardModule
      //     ),
      // },
      {
        path: "list-kanji",
        component: ListKanjiComponent,
        data : {
          title: "List Kanji"
        }
      },
      {
        path: "add-kanji",
        component: AddKanjiComponent,
        data : {
          title: "Add Kanji"
        }
      },
      {
        path: "kanjis/:id",
        component: EditKanjiComponent,
        data : {
          title: "Update Kanji"
        }
      },
      {
        path: "list-user",
        component: ListUserComponent,
        data : {
          title: "List User"
        }
      },
      {
        path: "users/:id",
        component: EditUserComponent,
        data : {
          title: "Update User"
        }
      },
      {
        path: "list-level",
        component: ListLevelComponent,
        data : {
          title: "List level"
        }
      },
      {
        path: "add-level",
        component: AddLevelComponent,
        data : {
          title: "Add level"
        }
      },
      {
        path: "levels/:id",
        component: EditLevelComponent,
        data : {
          title: "Update level"
        }
      },
      {
        path: "list-lesson",
        component: ListLessonComponent,
        data : {
          title: "List Lesson"
        }
      },
      {
        path: "add-lesson",
        component: AddLessonComponent,
        data : {
          title: "Add Lesson"
        }
      },
      {
        path: "lessons/:id",
        component: EditLessonComponent,
        data : {
          title: "Update Lesson"
        }
      },
      {
        path: "list-vocabulary",
        component: ListVocabularyComponent,
        data : {
          title: "List Vocabulary"
        }
      },
      {
        path: "add-vocabulary",
        component: AddVocabularyComponent,
        data : {
          title: "Add Vocabulary"
        }
      },
      {
        path: "vocabularies/:id",
        component: EditVocabularyComponent,
        data : {
          title: "Update Vocabulary"
        }
      },
      {
        path: "list-quiz-multiple",
        component: ListQuizMultipleComponent,
        data : {
          title: "List Quiz Multiple"
        }
      },
      {
        path: "add-quiz-multiple",
        component: AddQuizMultipleComponent,
        data : {
          title: "Add Quiz Multiple"
        }
      },
      {
        path: "quizzesmultiple/:id",
        component: EditQuizMultipleComponent,
        data : {
          title: "Update Quiz Multiple"
        }
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
