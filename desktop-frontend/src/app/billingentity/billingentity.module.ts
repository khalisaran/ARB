import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillingEntityScreenengComponent } from './billingentityscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { List_BillingEntity_ActivityengComponent } from './list_billingentity_activityeng.component';
import { BillingEntityService } from './billingentity.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        BillingEntityScreenengComponent,
        List_BillingEntity_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'BillingEntityScreeneng', component: BillingEntityScreenengComponent},
            { path: 'List_BillingEntity_Activityeng', component: List_BillingEntity_ActivityengComponent}
       
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        BillingEntityService
    ]
})

export class BillingEntityModule {

}