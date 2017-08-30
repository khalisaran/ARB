import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationScreenengComponent } from './applicationscreeneng.component';
import { List_Application_ActivityengComponent } from './list_application_activityeng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ApplicationService } from './application.service';

@NgModule({
    declarations: [
        ApplicationScreenengComponent,
        List_Application_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'ApplicationScreeneng', component: ApplicationScreenengComponent},
            { path: 'List_Application_Activityeng', component: List_Application_ActivityengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ApplicationService
    ]
})

export class ApplicationModule {

}