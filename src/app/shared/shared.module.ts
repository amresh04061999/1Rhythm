import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { CardComponent } from './card/card.component';
import { PhoneMaskingDirective } from './directives/phone-masking.directive';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    BookingHistoryComponent,
    ManageProfileComponent,
    CardComponent,
    PhoneMaskingDirective,
    SearchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
