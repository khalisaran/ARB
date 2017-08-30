import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LIND_ScreenengComponent } from './lind_screeneng.component';
import { List_LINDengComponent } from './list_lindeng.component';
import { MdInputModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';
import { FormsModule } from '@angular/forms';
import { LNIDService } from './lnid.service';

@NgModule({
    declarations: [
        LIND_ScreenengComponent,
        List_LINDengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule, 
        AgGridModule.withComponents([]),        
        RouterModule.forChild([
            { path: 'LIND_Screeneng', component: LIND_ScreenengComponent},
            { path: 'List_LINDeng', component: List_LINDengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        LNIDService
    ]
})

export class LNIDModule {

}