import { Component, OnInit } from "@angular/core";
import { DialogService } from "../../services/dialog.service";

@Component({
  selector: "dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}
}
