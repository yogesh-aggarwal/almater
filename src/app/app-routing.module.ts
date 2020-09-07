import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { DashboardComponent } from "./routes/dashboard/dashboard.component";
import { UserPermissionsComponent } from "./routes/user-permissions/user-permissions.component";
import { StaffManagementComponent } from "./routes/staff-management/staff-management.component";
import { MessagesComponent } from "./routes/messages/messages.component";
import { AdmissionsComponent } from "./routes/admissions/admissions.component";
import { CertificatesComponent } from "./routes/certificates/certificates.component";

const routes: Routes = [
  // Routes
  { path: "dashboard", component: DashboardComponent },
  { path: "user-permissions", component: UserPermissionsComponent },
  { path: "staff-management", component: StaffManagementComponent },
  { path: "messages", component: MessagesComponent },
  { path: "admissions", component: AdmissionsComponent },
  { path: "certificates", component: CertificatesComponent },
  // Redirects
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
