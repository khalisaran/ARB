import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingOrFloorScreenengComponent } from './buildingorfloorscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BuildingOrFloorService } from './buildingorfloor.service';

@NgModule({
    declarations: [
        BuildingOrFloorScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'BuildingOrFloorScreeneng', component: BuildingOrFloorScreenengComponent}
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