import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioDescriptionComponent } from './studio-description/studio-description.component';
import { StudioBookingFormComponent } from './studio-booking-form/studio-booking-form.component';
import { ManageStudioProfileComponent } from './manage-studio-profile/manage-studio-profile.component';


@NgModule({
  declarations: [
    StudioComponent,
    StudioListComponent,
    StudioDescriptionComponent,
    StudioBookingFormComponent,
    ManageStudioProfileComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
