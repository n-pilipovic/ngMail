import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

@Component({
  moduleId: module.id,
  selector: 'mail-client-app',
  templateUrl: 'mail-client.component.html',
  styleUrls: ['mail-client.component.css'],
  providers: [ROUTER_PROVIDERS],
  directives: [MenuComponent]
})
export class MailClientAppComponent {
  title = 'mail-client works!';
}
