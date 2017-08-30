import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApproverOrProjectManagerScreenengComponent } from './approverorprojectmanagerscreeneng.component';
import { MdInputModule } from '@angular/material';
import { List_ApproverOrProjectManagerengComponent } from './list_approverorprojectmanagereng.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ApproverOrProjectManagerService } from './approverorprojectmanager.service';

@NgModule({
    declarations: [
        ApproverOrProjectManagerScreenengComponent,
        List_ApproverOrProjectManagerengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'ApproverOrProjectManagerScreeneng', component: ApproverOrProjectManagerScreenengComponent},
            { path: 'List_ApproverOrProjectManagereng', component: List_ApproverOrProjectManagerengComponent}
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