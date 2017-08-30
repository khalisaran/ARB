import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OS_ScreenengComponent } from './os_screeneng.component';
import { MdInputModule } from '@angular/material';
import { List_OS_ActivityengComponent } from './list_os_activityeng.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { OSService } from './os.service';

@NgModule({
    declarations: [
        OS_ScreenengComponent,
        List_OS_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'OS_Screeneng', component: OS_ScreenengComponent},
            { path: 'List_OS_Activityeng', component: List_OS_ActivityengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        OSService
    ]
})

export class OSModule {

}