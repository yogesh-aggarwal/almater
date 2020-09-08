import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { DataService, RouteInterface } from "../../services/data.service";

@Component({
  selector: "sidebar-component",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  currentRoute: string = "";

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        const currentRoute: string = event.url.split("/")[1];
        let newRoute: RouteInterface;

        this.dataService.primaryRoutes.forEach((route: RouteInterface) => {
          if (route.route === currentRoute) {
            newRoute = route;
          }
        });

        this.dataService.secondaryRoutes.forEach((route: RouteInterface) => {
          if (route.route === currentRoute) {
            newRoute = route;
          }
        });

        this.dataService.currentRoute = newRoute;
      }
    });
  }
}
