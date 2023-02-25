import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './dashboard-layout/left-sidebar/left-sidebar.component';
import { TopMenuComponent } from './dashboard-layout/top-menu/top-menu.component';
import { FooterComponent } from './dashboard-layout/footer/footer.component';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {UikitModule} from "../../uikit/uikit.module";
import { NavLinksComponent } from './dashboard-layout/left-sidebar/nav-links/nav-links.component';
import { LinkComponent } from './dashboard-layout/left-sidebar/nav-links/link/link.component';
import {AdminComponent} from "../admin/admin/admin.component";
import {AdminModule} from "../admin/admin.module";
import {DesktopComponent} from "../desktop/desktop/desktop.component";
import {DesktopModule} from "../desktop/desktop.module";


const routes: Routes =[
  {path:'admin',component:AdminComponent},
  {path:'desktop',component:DesktopComponent},
  {path:'**',redirectTo:'desktop'}
];

@NgModule({
  declarations: [
    LeftSidebarComponent,
    TopMenuComponent,
    FooterComponent,
    DashboardLayoutComponent,
    NavLinksComponent,
    LinkComponent
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
