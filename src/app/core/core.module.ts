import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './Navbar/header/header.component';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MasterComponent,HeaderComponent]
})
export class CoreModule { }
