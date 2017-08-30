import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModeOfUseScreenengComponent } from './modeofusescreeneng.component';
import { List_ModeOfUseengComponent } from './list_modeofuseeng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModeOfUseService } from './modeofuse.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        ModeOfUseScreenengComponent,
        List_ModeOfUseengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'ModeOfUseScreeneng', component: ModeOfUseScreenengComponent},
            { path: 'List_ModeOfUseeng', component: List_ModeOfUseengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ModeOfUseService
    ]
})

export class ModeOfUseModule {

}