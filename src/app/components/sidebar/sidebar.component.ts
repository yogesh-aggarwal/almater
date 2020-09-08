import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";

interface RouteInterface {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: "sidebar-component",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  currentRoute: string = "";
  primaryRoute: Array<RouteInterface> = [
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
  secondaryRoute: Array<RouteInterface> = [
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

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.split("/")[1];
      }
    });
  }
}
