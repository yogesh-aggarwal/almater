import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UserPermissionsComponent } from './routes/user-permissions/user-permissions.component';
import { StaffManagementComponent } from './routes/staff-management/staff-management.component';
import { MessagesComponent } from './routes/messages/messages.component';
import { AdmissionsComponent } from './routes/admissions/admissions.component';
import { CertificatesComponent } from './routes/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    UserPermissionsComponent,
    StaffManagementComponent,
    MessagesComponent,
    AdmissionsComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
