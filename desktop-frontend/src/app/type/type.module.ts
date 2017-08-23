import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeinOtherinfoScreenengComponent } from './typeinotherinfoscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TypeService } from './type.service';

@NgModule({
    declarations: [
        TypeinOtherinfoScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'TypeinOtherinfoScreeneng', component: TypeinOtherinfoScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        TypeService
    ]
})

export class TypeModule {

}