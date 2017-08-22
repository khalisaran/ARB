import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAllocationStatusScreenengComponent } from './userallocationstatusscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserAllocationStatusService } from './userallocationstatus.service';

@NgModule({
    declarations: [
        UserAllocationStatusScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'UserAllocationStatusScreeneng', component: UserAllocationStatusScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        UserAllocationStatusService
    ]
})

export class UserAllocationStatusModule {

}