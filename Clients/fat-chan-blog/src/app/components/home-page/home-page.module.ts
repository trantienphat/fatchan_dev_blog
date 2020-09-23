import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';

const homeRoutes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    declarations: [
        HomePageComponent
    ],
    entryComponents: []
})
export class HomePageModule { }

