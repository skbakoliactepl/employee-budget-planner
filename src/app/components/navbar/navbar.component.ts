import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { bellIcon, SVGIcon, userIcon } from '@progress/kendo-svg-icons';
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { KENDO_AVATAR } from "@progress/kendo-angular-layout";
import { BadgeModule } from "@progress/kendo-angular-indicators";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    KENDO_BUTTONS,
    KENDO_LAYOUT,
    KENDO_ICONS,
    ToolBarModule,
    KENDO_NAVIGATION,
    KENDO_AVATAR,
    BadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public userIcon: SVGIcon = userIcon;
  public bellIcon: SVGIcon = bellIcon;
  isProfileMenuOpen = false;

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
