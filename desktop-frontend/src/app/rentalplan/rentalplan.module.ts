import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_1700_rentalengComponent } from './screen_1700_rentaleng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RentalPlanService } from './rentalplan.service';

@NgModule({
    declarations: [
        Screen_1700_rentalengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_1700_rentaleng', component: Screen_1700_rentalengComponent}
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