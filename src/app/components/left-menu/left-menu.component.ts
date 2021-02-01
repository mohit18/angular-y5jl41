import { Component, OnInit } from "@angular/core";
import { onSideNavChange, animateText } from "../../animations/animations";
import { SidenavService } from "../../services/sidenav.service";

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: "app-left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.css"],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public Main_Menu: Page[] = [
    { name: "Products", link: "./header.component.html", icon: "inbox" },
    { name: "Categories", link: "some-link", icon: "loupe" },
    { name: "Inventories", link: "some-link", icon: "send" },
    { name: "Order", link: "some-link", icon: "book" },
    { name: "Customer", link: "some-link", icon: "person" },
    { name: "Location", link: "some-link", icon: "subject" }
  ];
  public system_Menu: Page[] = [
    { name: "Order", link: "some-link", icon: "book" },
    { name: "Customer", link: "some-link", icon: "person" },
    { name: "Location", link: "some-link", icon: "subject" }
  ];

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }
}
