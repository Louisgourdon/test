import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showUserManagement = false;
  showDashboard = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnInit() {
    this.drawer.open();
  }
}
