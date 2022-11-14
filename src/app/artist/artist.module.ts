import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDescriptionComponent } from './artist-description/artist-description.component';
import { ArtistBookingFormComponent } from './artist-booking-form/artist-booking-form.component';
import { ManageArtistProfileComponent } from './manage-artist-profile/manage-artist-profile.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistListComponent,
    ArtistDescriptionComponent,
    ArtistBookingFormComponent,
    ManageArtistProfileComponent,
    BookingDetailsComponent,
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
