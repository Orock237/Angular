import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AngularIntroComponent } from './angular-intro/angular-intro.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/angular-intro', pathMatch: 'full'}, //default-page
  {path: 'imprint', component: ImprintComponent},
  {path: 'cookie-policy', component: CookiePolicyComponent},
  {path: 'angular-intro', component: AngularIntroComponent},
  {path: 'imprint/unit-test', component: UnitTestComponent},
  {path: 'department-list', component: DepartmentListComponent},
  {path: 'department-list/:id', component: DepartmentDetailComponent},
  {path: '**', component: PageNotFoundComponent} //The Not-Found-page must be at the end of the routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ImprintComponent, CookiePolicyComponent,
   AngularIntroComponent, UnitTestComponent, PageNotFoundComponent, DepartmentListComponent,
   DepartmentDetailComponent]
