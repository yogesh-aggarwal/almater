import { Injectable } from "@angular/core";

interface ActionsInterface {
  name: string;
  callback: any;
  color: string;
}

@Injectable({
  providedIn: "root",
})
export class DialogService {
  title: string;
  content: string;
  actions: Array<ActionsInterface>;
  isActive: boolean = false;

  constructor() {}

  showDialog(title: string, content: string, actions: Array<ActionsInterface>) {
    this.title = title;
    this.content = content;
    this.actions = actions;
    this.isActive = true;
  }
}
