import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReasonForNotCount_screenengComponent } from './reasonfornotcount_screeneng.component';
import { List_ReasonForNotCount_screenengComponent } from './list_reasonfornotcount_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReasonForNotCountService } from './reasonfornotcount.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        ReasonForNotCount_screenengComponent,
        List_ReasonForNotCount_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'ReasonForNotCount_screeneng', component: ReasonForNotCount_screenengComponent},
            { path: 'List_ReasonForNotCount_screeneng', component: List_ReasonForNotCount_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ReasonForNotCountService
    ]
})

export class ReasonForNotCountModule {

}