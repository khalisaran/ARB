import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryScreenengComponent } from './categoryscreeneng.component';
import { MdInputModule } from '@angular/material';
import { List_Category_ActivityengComponent } from './list_category_activityeng.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
    declarations: [
        CategoryScreenengComponent,
        List_Category_ActivityengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'CategoryScreeneng', component: CategoryScreenengComponent},
            { path: 'List_Category_Activityeng', component: List_Category_ActivityengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        CategoryService
    ]
})

export class CategoryModule {

}