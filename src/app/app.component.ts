import { Component, OnInit } from "@angular/core";
import { DialogService } from "./services/dialog.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  open() {
    this.dialogService.showDialog("Title", "Content", [
      {
        name: "Okay",
        callback: () => {
          console.log("called");
        },
        color: "blue",
      },
    ]);
  }

  ngOnInit(): void {
    
  }
}
