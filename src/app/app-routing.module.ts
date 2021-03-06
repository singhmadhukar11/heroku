import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
