import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoyearScreenengComponent } from './poyearscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PoyearService } from './poyear.service';
import { List_Poyear_ActivityengComponent } from './list_poyear_activityeng.component';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        PoyearScreenengComponent,
        List_Poyear_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'PoyearScreeneng', component: PoyearScreenengComponent},
            { path: 'List_Poyear_Activityeng', component: List_Poyear_ActivityengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        PoyearService
    ]
})

export class PoyearModule {

}