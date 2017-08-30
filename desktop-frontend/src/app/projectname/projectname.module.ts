import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectNameScreenengComponent } from './projectnamescreeneng.component';
import { MdInputModule } from '@angular/material';
import { List_ProjectNameengComponent } from './list_projectnameeng.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ProjectNameService } from './projectname.service';

@NgModule({
    declarations: [
        ProjectNameScreenengComponent,
        List_ProjectNameengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'ProjectNameScreeneng', component: ProjectNameScreenengComponent},
            { path: 'List_ProjectNameeng', component: List_ProjectNameengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ProjectNameService
    ]
})

export class ProjectNameModule {

}