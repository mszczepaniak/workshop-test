import {ToasterService} from '../services/toaster.service';
import {MateService} from '../services/mate.service';
import {MateListComponent} from '../mate-list/mate-list.component';
import {MateComponent} from './mate.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MateDetailsComponent} from '../mate-details/mate-details.component';

@NgModule({
  declarations: [
    MateComponent,
    MateListComponent,
    MateDetailsComponent
  ],
  imports: [CommonModule],
  exports: [MateListComponent],
  providers: [
    MateService,
    ToasterService
  ]
})
export class MateModule {}
