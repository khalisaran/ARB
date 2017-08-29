import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CensusCount_screenengComponent } from './censuscount_screeneng.component';
import { List_CensusCount_screenengComponent } from './list_censuscount_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { CensusCountService } from './censuscount.service';

@NgModule({
    declarations: [
        CensusCount_screenengComponent,
        List_CensusCount_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'CensusCount_screeneng', component: CensusCount_screenengComponent},
            { path: 'List_CensusCount_screeneng', component: List_CensusCount_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        CensusCountService
    ]
})

export class CensusCountModule {

}