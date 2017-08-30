import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_1700_rentalengComponent } from './screen_1700_rentaleng.component';
import { Rental_plan_listengComponent } from './rental_plan_listeng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { RentalPlanService } from './rentalplan.service';

@NgModule({
    declarations: [
        Screen_1700_rentalengComponent,
        Rental_plan_listengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'Screen_1700_rentaleng', component: Screen_1700_rentalengComponent},
            { path: 'Rental_plan_listeng', component: Rental_plan_listengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        RentalPlanService
    ]
})

export class RentalPlanModule {

}