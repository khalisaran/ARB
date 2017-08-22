import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarrantyStatusscreenengComponent } from './warrantystatusscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { WarrantyStatusService } from './warrantystatus.service';

@NgModule({
    declarations: [
        WarrantyStatusscreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'WarrantyStatusscreeneng', component: WarrantyStatusscreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        WarrantyStatusService
    ]
})

export class WarrantyStatusModule {

}