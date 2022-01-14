import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    MaterialModule
  ]
})

export class SharedModule { }
