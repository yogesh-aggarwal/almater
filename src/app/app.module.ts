import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./routes/dashboard/dashboard.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { UserPermissionsComponent } from "./routes/user-permissions/user-permissions.component";
import { StaffManagementComponent } from "./routes/staff-management/staff-management.component";
import { MessagesComponent } from "./routes/messages/messages.component";
import { AdmissionsComponent } from "./routes/admissions/admissions.component";
import { CertificatesComponent } from "./routes/certificates/certificates.component";
import { ReportsComponent } from "./routes/reports/reports.component";
import { SupportComponent } from "./routes/support/support.component";
import { SettingsComponent } from "./routes/settings/settings.component";
import { FeesManagementComponent } from "./routes/fees-management/fees-management.component";
import { GlancebarComponent } from "./components/glancebar/glancebar.component";
import { DialogComponent } from "./components/dialog/dialog.component";

import { AngularFirestoreModule, SETTINGS } from "@angular/fire/firestore";
import { environment } from "src/environments/environment.prod";
import { AngularFireModule } from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    GlancebarComponent,
    UserPermissionsComponent,
    StaffManagementComponent,
    MessagesComponent,
    AdmissionsComponent,
    CertificatesComponent,
    ReportsComponent,
    SupportComponent,
    SettingsComponent,
    FeesManagementComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
