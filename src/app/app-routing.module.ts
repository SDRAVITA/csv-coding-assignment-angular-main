import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsScreenComponent } from './details-screen/details-screen.component';
import { ListScreenComponent } from './list-screen/list-screen.component';
//import { AuthGaurd } from './modules/auth/auth-gaurd.service';
//import { TaskComponent } from './components/task/task.component';





const routes: Routes = [
  {
    path: '',
    component: ListScreenComponent
  },
  {
    path: 'task',
    component: ListScreenComponent
  },
  {
    path: 'details',
    component: DetailsScreenComponent
  },
  {
    path: '**',
    component: ListScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
