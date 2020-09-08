import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface RouteInterface {
  name: string;
  icon: string;
  route: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  currentRoute: RouteInterface;
  primaryRoutes: Array<RouteInterface> = [
    {
      name: "Dashboard",
      icon: "home",
      route: "dashboard",
    },
    {
      name: "User Permissions",
      icon: "user-tie",
      route: "user-permissions",
    },
    {
      name: "Staff Management",
      icon: "chalkboard-teacher",
      route: "staff-management",
    },
    {
      name: "Fees Management",
      icon: "donate",
      route: "fees-management",
    },
    {
      name: "Messages",
      icon: "comment",
      route: "messages",
    },
    {
      name: "Admissions",
      icon: "hotel",
      route: "admissions",
    },
    {
      name: "Certificates",
      icon: "certificate",
      route: "certificates",
    },
    {
      name: "Reports",
      icon: "newspaper",
      route: "reports",
    },
  ];
  secondaryRoutes: Array<RouteInterface> = [
    {
      name: "Support",
      icon: "donate",
      route: "support",
    },
    {
      name: "Settings",
      icon: "cog",
      route: "settings",
    },
  ];

  constructor(private router: Router) {}
}
