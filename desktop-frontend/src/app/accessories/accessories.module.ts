import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessorieScreenengComponent } from './accessoriescreeneng.component';
import { List_AccessoriesengComponent } from './list_accessorieseng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AccessoriesService } from './accessories.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        AccessorieScreenengComponent,
        List_AccessoriesengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'AccessorieScreeneng', component: AccessorieScreenengComponent},
            { path: 'List_Accessorieseng', component: List_AccessoriesengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AccessoriesService
    ]
})

export class AccessoriesModule {

}