import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'app', component: AppComponent },
  {path: '', component: ListComponent},
  {path:'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
