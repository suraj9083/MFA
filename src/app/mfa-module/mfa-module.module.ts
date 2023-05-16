import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfaModuleRoutingModule } from './mfa-module-routing.module';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { MfaAuthComponent } from './mfa-auth/mfa-auth.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsermanagementComponent,
    MfaAuthComponent,
    SuccessPageComponent
  ],
  imports: [
    CommonModule,
    MfaModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MfaModuleModule { }
