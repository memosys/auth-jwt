import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateTokenRoutingModule } from './generate-token-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { GenerateTokenComponent } from './generate-token.component';


@NgModule({
  declarations: [
    GenerateTokenComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    GenerateTokenRoutingModule
  ]
})
export class GenerateTokenModule { }
