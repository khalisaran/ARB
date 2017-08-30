import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngineerScreenengComponent } from './engineerscreeneng.component';
import { List_EngineerengComponent } from './list_engineereng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { EngineerService } from './engineer.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        EngineerScreenengComponent,
        List_EngineerengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'EngineerScreeneng', component: EngineerScreenengComponent},
            { path: 'List_Engineereng', component: List_EngineerengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        EngineerService
    ]
})

export class EngineerModule {

}