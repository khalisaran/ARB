import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsuranceDetailsScreenengComponent } from './insurancedetailsscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { InsuranceStatusService } from './insurancestatus.service';

@NgModule({
    declarations: [
        InsuranceDetailsScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'InsuranceDetailsScreeneng', component: InsuranceDetailsScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        InsuranceStatusService
    ]
})

export class InsuranceStatusModule {

}