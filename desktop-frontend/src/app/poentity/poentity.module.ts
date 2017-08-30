import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoEntityScreenengComponent } from './poentityscreeneng.component';
import { List_Poentity_ActivityengComponent } from './list_poentity_activityeng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { PoentityService } from './poentity.service';

@NgModule({
    declarations: [
        PoEntityScreenengComponent,
        List_Poentity_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'PoEntityScreeneng', component: PoEntityScreenengComponent},
            { path: 'List_Poentity_Activityeng', component: List_Poentity_ActivityengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        PoentityService
    ]
})

export class PoentityModule {

}