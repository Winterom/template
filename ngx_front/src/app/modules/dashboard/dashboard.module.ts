import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './dashboard-layout/left-sidebar/left-sidebar.component';
import { TopMenuComponent } from './dashboard-layout/top-menu/top-menu.component';
import { FooterComponent } from './dashboard-layout/footer/footer.component';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {UikitModule} from "../../uikit/uikit.module";
import {AdminModule} from "../admin/admin.module";
import {DesktopComponent} from "../desktop/desktop/desktop.component";
import {DesktopModule} from "../desktop/desktop.module";
import { SideBarMenuComponent } from './dashboard-layout/left-sidebar/side-bar-menu/side-bar-menu.component';



const routes: Routes =[
  {path:'admin',loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule)},
  {path:'desktop',component:DesktopComponent},
  {path:'**',redirectTo:'desktop'}
];

@NgModule({
  declarations: [
    LeftSidebarComponent,
    TopMenuComponent,
    FooterComponent,
    DashboardLayoutComponent,
    SideBarMenuComponent,
  ],
  exports: [
    LeftSidebarComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        UikitModule,
        AdminModule,
        DesktopModule,
        RouterModule.forChild(routes),
    ]
})
export class DashboardModule { }
