import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {AddProfileComponent} from './add-profile/add-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [
        ProfilePage,
        AddProfileComponent,
        EditProfileComponent
    ],
    entryComponents: [
        AddProfileComponent,
        EditProfileComponent
    ]
})
export class ProfilePageModule {
}
