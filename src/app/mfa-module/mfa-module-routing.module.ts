import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { MfaAuthComponent } from './mfa-auth/mfa-auth.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'home',
    component: SuccessPageComponent
  },
  {
    path: 'user/login',
    component: UsermanagementComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'user/mfa',
    component: MfaAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfaModuleRoutingModule { }
