import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingOrFloorScreenengComponent } from './buildingorfloorscreeneng.component';
import { MdInputModule } from '@angular/material';
import { Lsit_BuildingOrFloorengComponent } from './lsit_buildingorflooreng.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { BuildingOrFloorService } from './buildingorfloor.service';

@NgModule({
    declarations: [
        BuildingOrFloorScreenengComponent,
        Lsit_BuildingOrFloorengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'BuildingOrFloorScreeneng', component: BuildingOrFloorScreenengComponent},
            { path: 'Lsit_BuildingOrFlooreng', component: Lsit_BuildingOrFloorengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        BuildingOrFloorService
    ]
})

export class BuildingOrFloorModule {

}