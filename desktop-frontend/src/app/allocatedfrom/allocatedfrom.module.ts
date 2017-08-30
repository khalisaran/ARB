import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllocatedFromScreenengComponent } from './allocatedfromscreeneng.component';
import { List_allocatedfromengComponent } from './list_allocatedfromeng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AllocatedFromService } from './allocatedfrom.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        AllocatedFromScreenengComponent,
        List_allocatedfromengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'AllocatedFromScreeneng', component: AllocatedFromScreenengComponent},
            { path: 'List_allocatedfromeng', component: List_allocatedfromengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AllocatedFromService
    ]
})

export class AllocatedFromModule {

}