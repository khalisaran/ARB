import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApproverOrProjectManagerScreenengComponent } from './approverorprojectmanagerscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ApproverOrProjectManagerService } from './approverorprojectmanager.service';

@NgModule({
    declarations: [
        ApproverOrProjectManagerScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'ApproverOrProjectManagerScreeneng', component: ApproverOrProjectManagerScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ApproverOrProjectManagerService
    ]
})

export class ApproverOrProjectManagerModule {

}